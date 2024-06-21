-- CreateTable
CREATE TABLE "activity" (
    "id" SERIAL NOT NULL,
    "activityName" TEXT NOT NULL,
    "requirements" TEXT[],

    CONSTRAINT "activity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "activity_id_key" ON "activity"("id");

-- CreateIndex
CREATE UNIQUE INDEX "activity_activityName_key" ON "activity"("activityName");
