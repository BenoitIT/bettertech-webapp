-- CreateTable
CREATE TABLE "transaction" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "actId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unit" TEXT NOT NULL,
    "amountEarned" INTEGER NOT NULL,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "transaction_id_key" ON "transaction"("id");

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_actId_fkey" FOREIGN KEY ("actId") REFERENCES "activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
