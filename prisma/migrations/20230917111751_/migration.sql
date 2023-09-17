/*
  Warnings:

  - Made the column `courseId` on table `SemCourse` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "SemCourse" DROP CONSTRAINT "SemCourse_courseId_fkey";

-- AlterTable
ALTER TABLE "SemCourse" ALTER COLUMN "courseId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "SemCourse" ADD CONSTRAINT "SemCourse_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
