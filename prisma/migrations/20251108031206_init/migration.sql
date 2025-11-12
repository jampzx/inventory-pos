/*
  Warnings:

  - You are about to drop the column `branch_details` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `stocked_in` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `commission_category_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `branch_name` on the `transaction_details` table. All the data in the column will be lost.
  - You are about to drop the column `bundled_with_product_name` on the `transaction_details` table. All the data in the column will be lost.
  - You are about to drop the column `staff_name` on the `transaction_details` table. All the data in the column will be lost.
  - You are about to drop the column `bundled_with_id` on the `transaction_items` table. All the data in the column will be lost.
  - You are about to drop the column `branch_id` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `staff_id` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the `branch_sale_items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `branch_sales` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `branches` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cash_declaration_summary` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cash_tender_declaration` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `commission_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `expense_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `expenses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_stocks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `staff_commission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `staff_commission_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `stock_in_logs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_branches` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "branch_sale_items" DROP CONSTRAINT "branch_sale_items_product_id_fkey";

-- DropForeignKey
ALTER TABLE "branch_sale_items" DROP CONSTRAINT "branch_sale_items_sale_id_fkey";

-- DropForeignKey
ALTER TABLE "branch_sales" DROP CONSTRAINT "branch_sales_from_branch_id_fkey";

-- DropForeignKey
ALTER TABLE "branch_sales" DROP CONSTRAINT "branch_sales_to_branch_id_fkey";

-- DropForeignKey
ALTER TABLE "cash_tender_declaration" DROP CONSTRAINT "cash_tender_declaration_declaration_summary_id_fkey";

-- DropForeignKey
ALTER TABLE "expenses" DROP CONSTRAINT "expenses_category_id_fkey";

-- DropForeignKey
ALTER TABLE "product_stocks" DROP CONSTRAINT "product_stocks_branch_id_fkey";

-- DropForeignKey
ALTER TABLE "product_stocks" DROP CONSTRAINT "product_stocks_product_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_category_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_commission_category_id_fkey";

-- DropForeignKey
ALTER TABLE "staff_commission" DROP CONSTRAINT "staff_commission_branch_id_fkey";

-- DropForeignKey
ALTER TABLE "staff_commission_categories" DROP CONSTRAINT "staff_commission_categories_commission_category_id_fkey";

-- DropForeignKey
ALTER TABLE "staff_commission_categories" DROP CONSTRAINT "staff_commission_categories_staff_commission_id_fkey";

-- DropForeignKey
ALTER TABLE "stock_in_logs" DROP CONSTRAINT "stock_in_logs_branch_id_fkey";

-- DropForeignKey
ALTER TABLE "stock_in_logs" DROP CONSTRAINT "stock_in_logs_order_id_fkey";

-- DropForeignKey
ALTER TABLE "stock_in_logs" DROP CONSTRAINT "stock_in_logs_product_id_fkey";

-- DropForeignKey
ALTER TABLE "transaction_items" DROP CONSTRAINT "transaction_items_bundled_with_id_fkey";

-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_branch_id_fkey";

-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_staff_id_fkey";

-- DropForeignKey
ALTER TABLE "user_branches" DROP CONSTRAINT "user_branches_branch_id_fkey";

-- DropForeignKey
ALTER TABLE "user_branches" DROP CONSTRAINT "user_branches_user_id_fkey";

-- DropIndex
DROP INDEX "products_category_id_idx";

-- DropIndex
DROP INDEX "products_commission_category_id_idx";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "branch_details",
DROP COLUMN "stocked_in";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "category_id",
DROP COLUMN "commission_category_id";

-- AlterTable
ALTER TABLE "transaction_details" DROP COLUMN "branch_name",
DROP COLUMN "bundled_with_product_name",
DROP COLUMN "staff_name";

-- AlterTable
ALTER TABLE "transaction_items" DROP COLUMN "bundled_with_id";

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "branch_id",
DROP COLUMN "staff_id",
ADD COLUMN     "discount_type" "DiscountType" NOT NULL DEFAULT 'AMOUNT',
ADD COLUMN     "discount_value" DECIMAL(65,30) NOT NULL DEFAULT 0.00,
ADD COLUMN     "user_id" INTEGER;

-- DropTable
DROP TABLE "branch_sale_items";

-- DropTable
DROP TABLE "branch_sales";

-- DropTable
DROP TABLE "branches";

-- DropTable
DROP TABLE "cash_declaration_summary";

-- DropTable
DROP TABLE "cash_tender_declaration";

-- DropTable
DROP TABLE "commission_categories";

-- DropTable
DROP TABLE "expense_categories";

-- DropTable
DROP TABLE "expenses";

-- DropTable
DROP TABLE "product_categories";

-- DropTable
DROP TABLE "product_stocks";

-- DropTable
DROP TABLE "staff_commission";

-- DropTable
DROP TABLE "staff_commission_categories";

-- DropTable
DROP TABLE "stock_in_logs";

-- DropTable
DROP TABLE "user_branches";

-- DropEnum
DROP TYPE "CommissionType";

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
