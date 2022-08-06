import Image from "next/image";
import Post from "../Feed/Post";
const UserProfile = () => {
  return (
    <div className="bg-white w-full h-full ">
      <div className=" p-2 ">
        <Image
          className="rounded-xl "
          width="820px"
          height="312px"
          alt="Photo"
          src="/Background2.jpg"
          objectFit="cover"
        ></Image>
      </div>
    </div>
  );
};
export default UserProfile;
