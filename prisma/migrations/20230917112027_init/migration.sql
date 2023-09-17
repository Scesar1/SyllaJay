-- DropForeignKey
ALTER TABLE "SemCourse" DROP CONSTRAINT "SemCourse_courseInfoId_fkey";

-- AlterTable
ALTER TABLE "SemCourse" ALTER COLUMN "courseInfoId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "SemCourse" ADD CONSTRAINT "SemCourse_courseInfoId_fkey" FOREIGN KEY ("courseInfoId") REFERENCES "CourseInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
