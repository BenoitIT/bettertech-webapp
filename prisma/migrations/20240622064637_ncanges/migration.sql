/*
  Warnings:

  - You are about to drop the column `amountEarned` on the `transaction` table. All the data in the column will be lost.
  - Added the required column `amountearned` to the `transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transaction" DROP COLUMN "amountEarned",
ADD COLUMN     "amountearned" INTEGER NOT NULL;
