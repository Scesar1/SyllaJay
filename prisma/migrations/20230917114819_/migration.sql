/*
  Warnings:

  - You are about to drop the `Professor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SemCourse` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[courseId]` on the table `CourseInfo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `courseId` to the `CourseInfo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SemCourse" DROP CONSTRAINT "SemCourse_courseId_fkey";

-- DropForeignKey
ALTER TABLE "SemCourse" DROP CONSTRAINT "SemCourse_courseInfoId_fkey";

-- DropForeignKey
ALTER TABLE "SemCourse" DROP CONSTRAINT "SemCourse_professorId_fkey";

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "courseName" TEXT,
ADD COLUMN     "courseTime" TEXT,
ADD COLUMN     "professor" TEXT,
ADD COLUMN     "syllabus" TEXT;

-- AlterTable
ALTER TABLE "CourseInfo" ADD COLUMN     "courseId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Professor";

-- DropTable
DROP TABLE "SemCourse";

-- CreateIndex
CREATE UNIQUE INDEX "CourseInfo_courseId_key" ON "CourseInfo"("courseId");

-- AddForeignKey
ALTER TABLE "CourseInfo" ADD CONSTRAINT "CourseInfo_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
