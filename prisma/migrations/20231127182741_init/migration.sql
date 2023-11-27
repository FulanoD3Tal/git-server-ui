-- CreateTable
CREATE TABLE "Repository" (
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastUpdated" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "path" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Repository_uuid_key" ON "Repository"("uuid");
