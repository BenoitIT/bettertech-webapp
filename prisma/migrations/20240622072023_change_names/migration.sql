/*
  Warnings:

  - You are about to drop the column `doneat` on the `transaction` table. All the data in the column will be lost.
  - Added the required column `doneAt` to the `transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transaction" DROP COLUMN "doneat",
ADD COLUMN     "doneAt" TEXT NOT NULL;
