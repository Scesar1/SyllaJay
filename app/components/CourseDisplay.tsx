import { Course } from "@prisma/client";

type courseProps = {
  course: Course;
};

async function CourseDisplay({ course }: courseProps) {
  return (
    <div className="container flex">
      <div className="card flex card-bordered w-96 h-96 bg-base-100 shadow-lg">
        <div className="card-body">
          <h1 className="card-title font-black mb-5 text-4xl justify-center text-center">
            {course.courseName ? course.courseName : course.courseCode}
          </h1>
          <h2 className="">Professor: {course.professor ? course.professor : ""}</h2>
          <h2 className="my-5">Meeting times: {course.courseTime ? course.courseTime: ""}</h2>
          <div className="badge badge-secondary font-bold badge-lg">
            No exams
          </div>
          <button className="btn mt-2 btn-lg btn-primary rounded-box">
            Add to My Classes
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseDisplay;
