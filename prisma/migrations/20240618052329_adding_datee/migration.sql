/*
  Warnings:

  - Added the required column `doneAt` to the `transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transaction" ADD COLUMN     "doneAt" TEXT NOT NULL,
ALTER COLUMN "unit" SET DEFAULT '';
