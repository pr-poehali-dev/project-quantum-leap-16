
CREATE TABLE IF NOT EXISTS foxy_accounts (
  id SERIAL PRIMARY KEY,
  account_id VARCHAR(20) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(50) NOT NULL,
  balance NUMERIC(12,2) NOT NULL DEFAULT 0,
  fox_tokens INTEGER NOT NULL DEFAULT 10,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS foxy_transfers (
  id SERIAL PRIMARY KEY,
  from_account VARCHAR(20) REFERENCES foxy_accounts(account_id),
  to_account VARCHAR(20) REFERENCES foxy_accounts(account_id),
  amount NUMERIC(12,2) NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
