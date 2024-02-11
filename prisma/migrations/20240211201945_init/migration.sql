/*
  Warnings:

  - You are about to drop the column `level` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `levelProgress` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[gmailNickname]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "level",
DROP COLUMN "levelProgress",
ADD COLUMN     "gmailNickname" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_gmailNickname_key" ON "User"("gmailNickname");
