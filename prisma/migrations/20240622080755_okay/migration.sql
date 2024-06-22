/*
  Warnings:

  - You are about to drop the column `clientId` on the `transaction` table. All the data in the column will be lost.
  - Added the required column `clientid` to the `transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "transaction" DROP CONSTRAINT "transaction_clientId_fkey";

-- AlterTable
ALTER TABLE "transaction" DROP COLUMN "clientId",
ADD COLUMN     "clientid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_clientid_fkey" FOREIGN KEY ("clientid") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
