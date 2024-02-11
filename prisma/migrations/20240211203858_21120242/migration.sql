/*
  Warnings:

  - Made the column `gmailNickname` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" DROP NOT NULL,
ALTER COLUMN "gmailNickname" SET NOT NULL;
