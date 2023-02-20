/*
  Warnings:

  - Added the required column `date` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salesman` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transaction_type` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sales" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "product" VARCHAR(50) NOT NULL,
ADD COLUMN     "salesman" VARCHAR(50) NOT NULL,
ADD COLUMN     "transaction_type" INTEGER NOT NULL,
ADD COLUMN     "value" BIGINT NOT NULL;

-- AddForeignKey
ALTER TABLE "Sales" ADD CONSTRAINT "Sales_transaction_type_fkey" FOREIGN KEY ("transaction_type") REFERENCES "TransactionsType"("type") ON DELETE RESTRICT ON UPDATE CASCADE;
