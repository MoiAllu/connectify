import Image from "next/image";

const UserProfile = ({ user, setProfileButton }: any) => {
  return (
    <div className="bg-white p-2 w-full rounded-2xl shadow-sm">
      <div className="bg-[url('/Background.jpg')] bg-cover bg-fixed h-[312px] w-full rounded-lg  items-center justify-center ">
        <div className="justify-between flex h-full">
          <div className="h-full mt-[215px] px-6">
            {/** using div as profile picture as it is easy more versatile to give border radius as giving to an image */}
            <div
              className={`rounded-full outline outline-white w-[120px] h-[120px] `}
            >
              <Image
                className="rounded-full "
                src={user.profilePicture || "/square.jpg"}
                alt="Avatar Image"
                objectFit="fill"
                width={120}
                height={120}
              />
            </div>
          </div>
          <div className="h-full mt-[250px] px-8 ">
            <button className="bg-white px-2 py-1 rounded-md shadow-sm text-gray-700 transition-all hover:bg-gray-300 ">
              <span className="text-xs">Edit Cover Photo</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 p-4">
        <h1 className="font-bold text-gray-700 text-2xl ">{user?.name}</h1>
        <div className=" flex w-full justify-between text-gray-400 text-xs">
          <h3 className="p-2">UI Designer</h3>
          <div className="flex">
            <button
              className="font-semibold text-gray-700 mr-4 bg-gray-50 rounded-md transition-all p-3 hover:bg-gray-300 shadow-md "
              onClick={() => setProfileButton(true)}
            >
              Edit basic info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
