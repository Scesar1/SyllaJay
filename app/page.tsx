import Image from "next/image";
import ThemeSwitchBtn from "./components/ThemeSwitchBtn";
import ClassCard from "./components/ClassCard";

export default function Home() {
  return (
    <main className="bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#B3B3F1] to-[#FFFFFF]flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-4 gap-20">
        <ClassCard></ClassCard>
        <ClassCard></ClassCard>
      </div>
    </main>
  );
}
