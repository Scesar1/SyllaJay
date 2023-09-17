import CourseForm from "../components/CourseForm";

export default function NewCourse() {
  return (
    <main className="bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#B3B3F1] to-[#FFFFFF] flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <CourseForm></CourseForm>
      </div>
    </main>
  );
}