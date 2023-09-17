/*
  Warnings:

  - You are about to drop the column `emailedVerified` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailedVerified",
ADD COLUMN     "emailVerified" TIMESTAMP(3);
