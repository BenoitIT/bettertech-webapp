-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "clientNames" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "clientType" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "district" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_id_key" ON "Client"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");
