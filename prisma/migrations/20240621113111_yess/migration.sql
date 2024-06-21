-- CreateTable
CREATE TABLE "Subcribers" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Subcribers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subcribers_id_key" ON "Subcribers"("id");
