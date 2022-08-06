import Image from "next/image";
import Post from "../Feed/Post";
const UserProfile = () => {
  return (
    <div className="bg-white p-2 w-full rounded-2xl shadow-sm">
      <div className="bg-[url('/Background.jpg')] bg-cover bg-fixed h-[312px] w-full rounded-lg  items-center justify-center ">
        <div className="justify-between flex h-full">
          <div className="h-full mt-[210px] px-6">
            {/** using div as profile picture as it is easy more versatile to give border radius as giving to an image */}
            <div className=" rounded-full outline outline-white bg-[url('/square.jpg')] w-[120px] h-[120px]  bg-cover">
              {/* <Image
                className="rounded-full "
                src={"/square.jpg"}
                alt="Avatar Image"
                objectFit="fill"
                width={100}
                height={100}
              /> */}
            </div>
          </div>
          <div className="h-full mt-[250px] px-8">
            <button className="bg-white px-2 py-1 rounded-md shadow-sm text-gray-700">
              <span className="text-xs">Edit Cover Photo</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 p-4">
        <h1 className="font-bold text-gray-700 text-2xl ">Jennifer</h1>
        <div className=" flex w-full justify-between text-gray-400 text-xs">
          <h3>UI Designer</h3>
          <div className="flex">
            <h3>Eye</h3>
            Edit Basic Information
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
