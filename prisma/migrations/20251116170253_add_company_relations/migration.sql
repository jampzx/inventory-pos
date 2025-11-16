/*
  Warnings:

  - Added the required column `company_id` to the `expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `payment_types` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `transaction_details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `transaction_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `transaction_payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- 1. Add company_id as nullable first
ALTER TABLE "expenses" ADD COLUMN     "company_id" INTEGER;

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "company_id" INTEGER;

-- AlterTable
ALTER TABLE "payment_types" ADD COLUMN     "company_id" INTEGER;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "company_id" INTEGER;

-- AlterTable
ALTER TABLE "transaction_details" ADD COLUMN     "company_id" INTEGER;

-- AlterTable
ALTER TABLE "transaction_items" ADD COLUMN     "company_id" INTEGER;

-- AlterTable
ALTER TABLE "transaction_payments" ADD COLUMN     "company_id" INTEGER;

-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "company_id" INTEGER;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "company_id" INTEGER;

-- 2. Create the Company table
CREATE TABLE "Company" (
  "company_id" SERIAL NOT NULL,
  "company_name" VARCHAR(255) NOT NULL,
  "company_email" VARCHAR(255) NOT NULL,
  "company_contact_number" VARCHAR(50) NOT NULL,
  "company_address" VARCHAR(255) NOT NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Company_pkey" PRIMARY KEY ("company_id")
);

-- 3. Insert a default company
INSERT INTO "Company" (company_name, company_email, company_contact_number, company_address, created_at, updated_at)
VALUES ('Default Company', 'default@company.com', '0000000000', 'Default Address', NOW(), NOW());

-- 4. Set all existing rows to reference the default company
UPDATE "expenses" SET company_id = 1 WHERE company_id IS NULL;
UPDATE "orders" SET company_id = 1 WHERE company_id IS NULL;
UPDATE "payment_types" SET company_id = 1 WHERE company_id IS NULL;
UPDATE "products" SET company_id = 1 WHERE company_id IS NULL;
UPDATE "transaction_details" SET company_id = 1 WHERE company_id IS NULL;
UPDATE "transaction_items" SET company_id = 1 WHERE company_id IS NULL;
UPDATE "transaction_payments" SET company_id = 1 WHERE company_id IS NULL;
UPDATE "transactions" SET company_id = 1 WHERE company_id IS NULL;
UPDATE "users" SET company_id = 1 WHERE company_id IS NULL;

-- 5. Make company_id NOT NULL
ALTER TABLE "expenses" ALTER COLUMN "company_id" SET NOT NULL;
ALTER TABLE "orders" ALTER COLUMN "company_id" SET NOT NULL;
ALTER TABLE "payment_types" ALTER COLUMN "company_id" SET NOT NULL;
ALTER TABLE "products" ALTER COLUMN "company_id" SET NOT NULL;
ALTER TABLE "transaction_details" ALTER COLUMN "company_id" SET NOT NULL;
ALTER TABLE "transaction_items" ALTER COLUMN "company_id" SET NOT NULL;
ALTER TABLE "transaction_payments" ALTER COLUMN "company_id" SET NOT NULL;
ALTER TABLE "transactions" ALTER COLUMN "company_id" SET NOT NULL;
ALTER TABLE "users" ALTER COLUMN "company_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("company_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("company_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_types" ADD CONSTRAINT "payment_types_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("company_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("company_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction_items" ADD CONSTRAINT "transaction_items_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("company_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction_payments" ADD CONSTRAINT "transaction_payments_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("company_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction_details" ADD CONSTRAINT "transaction_details_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("company_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("company_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("company_id") ON DELETE RESTRICT ON UPDATE CASCADE;
