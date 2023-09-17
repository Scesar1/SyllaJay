import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import LogOutBtn from "./LogOutBtn";

async function ProfileCard() {
  const session = await getServerSession(authOptions);
  return (
    <div className="card w-96 h-96 bg-base-100 shadow-lg items-center">
      <div className="avatar mt-10">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <Image
            src={session?.user?.image || ""}
            width="100"
            height="100"
            alt="profile"
          />
        </div>
      </div>
      <div className="card-body">
        <h1 className="card-title justify-center">
          {session ? session.user?.name : "Name: "}
        </h1>
        <h2 className="mt-5">{session ? session.user?.email : ""}</h2>
        <LogOutBtn session={session}/>
      </div>
    </div>
  );
}

export default ProfileCard;
