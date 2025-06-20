/*
  Warnings:

  - You are about to drop the `Book` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Book";

-- CreateTable
CREATE TABLE "Bookshelf" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bookshelf_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bookshelf_title_key" ON "Bookshelf"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Bookshelf_description_key" ON "Bookshelf"("description");

-- CreateIndex
CREATE INDEX "Bookshelf_title_idx" ON "Bookshelf"("title");

-- CreateIndex
CREATE INDEX "Bookshelf_author_idx" ON "Bookshelf"("author");
