import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.course.upsert({
    where: { courseCode: "EN.553.211" },
    update: {
      courseName: "Probability & Statistics",
      professor: "Taylor Jones",
      courseTime: "MWF 10:00am-10:50am, Tu 12:00pm-12:50pm",
    },
    create: {
      courseCode: "EN.553.211",
      courseName: "Probability & Statistics",
      professor: "Taylor Jones",
      courseTime: "MWF 10:00am-10:50am, Tu 12:00pm-12:50pm",
    },
  });

  console.log({ course });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
