import { prisma } from "@/lib/prisma";
import CourseDisplay from "../../components/CourseDisplay";

type Params = {
  params: {
    courseId: string;
  };
};

export default async function Course({ params: { courseId } }: Params) {
  const course = await prisma.course.findUnique({
    where: { id: parseInt(courseId) },
  });

  return (
    <main className="bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#B3B3F1] to-[#FFFFFF] flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <CourseDisplay course={course}></CourseDisplay>
      </div>
    </main>
  );
}
