import Image from "next/image";
import ThemeSwitchBtn from "./components/ThemeSwitchBtn";
import ClassCard from "./components/ClassCard";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  let courses = await prisma.course.findMany();
  return (
    <main className="bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#B3B3F1] to-[#FFFFFF]flex min-h-screen flex-col items-center justify-between p-20">
      <h1 className="text-3xl text-white font-semibold bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-primary to-[#7678ED] shadow-sm border-[#7678ED] border w-52 h-10 text-center rounded-box mb-10">
        All courses
      </h1>
      <div className="grid grid-cols-4 gap-20">
        {courses.map((course) => {
          return <ClassCard course={course}></ClassCard>;
        })}
      </div>
    </main>
  );
}
