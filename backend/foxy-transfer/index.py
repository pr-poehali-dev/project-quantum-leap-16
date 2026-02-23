"""Перевод средств между счетами Foxy.bank (макс. 10 000 ₽ за операцию)"""
import json
import os
import psycopg2

MAX_TRANSFER = 10000.00


def handler(event: dict, context) -> dict:
    headers = {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type"}

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    from_account = (body.get("from_account") or "").strip().upper()
    to_account = (body.get("to_account") or "").strip().upper()
    message = (body.get("message") or "").strip()

    try:
        amount = float(body.get("amount") or 0)
    except (ValueError, TypeError):
        return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "Неверная сумма"})}

    if not from_account or not to_account:
        return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "Укажите счёт отправителя и получателя"})}

    if from_account == to_account:
        return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "Нельзя переводить самому себе"})}

    if amount <= 0:
        return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "Сумма должна быть больше нуля"})}

    if amount > MAX_TRANSFER:
        return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": f"Максимальная сумма перевода — {MAX_TRANSFER:,.0f} ₽"})}

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()

    cur.execute("SELECT balance, name FROM foxy_accounts WHERE account_id = %s", (from_account,))
    sender = cur.fetchone()
    if not sender:
        cur.close(); conn.close()
        return {"statusCode": 404, "headers": headers, "body": json.dumps({"error": "Счёт отправителя не найден"})}

    cur.execute("SELECT name FROM foxy_accounts WHERE account_id = %s", (to_account,))
    recipient = cur.fetchone()
    if not recipient:
        cur.close(); conn.close()
        return {"statusCode": 404, "headers": headers, "body": json.dumps({"error": "Счёт получателя не найден"})}

    if sender[0] < amount:
        cur.close(); conn.close()
        return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": f"Недостаточно средств. Доступно: {sender[0]:.2f} ₽"})}

    cur.execute("UPDATE foxy_accounts SET balance = balance - %s WHERE account_id = %s", (amount, from_account))
    cur.execute("UPDATE foxy_accounts SET balance = balance + %s WHERE account_id = %s", (amount, to_account))
    cur.execute(
        "INSERT INTO foxy_transfers (from_account, to_account, amount, message) VALUES (%s, %s, %s, %s)",
        (from_account, to_account, amount, message or None),
    )
    conn.commit()

    cur.execute("SELECT balance FROM foxy_accounts WHERE account_id = %s", (from_account,))
    new_balance = cur.fetchone()[0]
    cur.close(); conn.close()

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({
            "success": True,
            "from": from_account,
            "to": to_account,
            "to_name": recipient[0],
            "amount": amount,
            "new_balance": float(new_balance),
        }),
    }
