"""Регистрация нового клиента Foxy.bank и открытие счёта"""
import json
import os
import random
import string
import psycopg2


def generate_account_id(cursor):
    while True:
        account_id = "FX-" + "".join(random.choices(string.digits, k=4))
        cursor.execute("SELECT 1 FROM foxy_accounts WHERE account_id = %s", (account_id,))
        if not cursor.fetchone():
            return account_id


def handler(event: dict, context) -> dict:
    headers = {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type"}

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = (body.get("name") or "").strip()
    email = (body.get("email") or "").strip().lower()
    phone = (body.get("phone") or "").strip()

    if not name or not email or not phone:
        return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "Заполните все поля"})}

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()

    cur.execute("SELECT account_id FROM foxy_accounts WHERE email = %s", (email,))
    existing = cur.fetchone()
    if existing:
        cur.close()
        conn.close()
        return {"statusCode": 409, "headers": headers, "body": json.dumps({"error": "Этот email уже зарегистрирован", "account_id": existing[0]})}

    account_id = generate_account_id(cur)
    cur.execute(
        "INSERT INTO foxy_accounts (account_id, name, email, phone, balance, fox_tokens) VALUES (%s, %s, %s, %s, 0, 10) RETURNING account_id, fox_tokens, created_at",
        (account_id, name, email, phone),
    )
    row = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"account_id": row[0], "fox_tokens": row[1], "name": name, "balance": 0}),
    }
