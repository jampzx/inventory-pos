-- Performance indexes added for frequently queried company_id and related fields

-- products
CREATE INDEX IF NOT EXISTS "products_company_id_idx" ON "products"("company_id");
CREATE INDEX IF NOT EXISTS "products_company_id_status_idx" ON "products"("company_id", "status");

-- users
CREATE INDEX IF NOT EXISTS "users_company_id_idx" ON "users"("company_id");

-- payment_types
CREATE INDEX IF NOT EXISTS "payment_types_company_id_idx" ON "payment_types"("company_id");

-- transactions
CREATE INDEX IF NOT EXISTS "transactions_company_id_created_at_idx" ON "transactions"("company_id", "created_at");
CREATE INDEX IF NOT EXISTS "transactions_company_id_status_idx" ON "transactions"("company_id", "status");

-- transaction_items
CREATE INDEX IF NOT EXISTS "transaction_items_transaction_id_idx" ON "transaction_items"("transaction_id");
CREATE INDEX IF NOT EXISTS "transaction_items_product_id_idx" ON "transaction_items"("product_id");

-- transaction_payments
CREATE INDEX IF NOT EXISTS "transaction_payments_transaction_id_idx" ON "transaction_payments"("transaction_id");

-- transaction_details
CREATE INDEX IF NOT EXISTS "transaction_details_transaction_id_idx" ON "transaction_details"("transaction_id");

-- orders
CREATE INDEX IF NOT EXISTS "orders_company_id_idx" ON "orders"("company_id");
CREATE INDEX IF NOT EXISTS "orders_company_id_order_date_idx" ON "orders"("company_id", "order_date");

-- expenses
CREATE INDEX IF NOT EXISTS "expenses_company_id_idx" ON "expenses"("company_id");
CREATE INDEX IF NOT EXISTS "expenses_company_id_date_idx" ON "expenses"("company_id", "date");
