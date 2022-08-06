import { Fragment } from "react";
import Image from "next/image";
const UserInforBar = () => {
  return (
    <Fragment>
      <div className="bg-white rounded-lg p-2 flex-col shadow-md min-w-[210px] xl:flex hidden">
        <h1 className="font-semibold text-gray-700 ">INTRO</h1>
        <div className="flex p-2 text-gray-500">
          <Image
            width="20px"
            height="20px"
            src="/Github.svg"
            className="min-h-[20px] min-w-[20px]"
          ></Image>
          <a href="/" className="text-sm ml-2">
            GitHub
          </a>
        </div>
        <div className="flex p-2 text-gray-500">
          {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
              viewBox="0 0 25 25"
              width="20px"
              height="20px"
            >
              <path d="m22 20.71-1.2-4.1A5.07 5.07 0 0 0 15.87 13h-.31A6.18 6.18 0 0 0 18 8v-.48a.44.44 0 0 0 0-.3 5.76 5.76 0 0 0-.37-1.51 1.89 1.89 0 0 0 1.17-.45 2.38 2.38 0 0 0-.13-3.31 2.38 2.38 0 0 0-3.27-.53 1.82 1.82 0 0 0-.58 1.13A5.16 5.16 0 0 0 12.49 2 5.79 5.79 0 0 0 7 8a6.16 6.16 0 0 0 2.43 5h-.3a5.08 5.08 0 0 0-4.88 3.61L3 20.71A1.08 1.08 0 0 0 3.63 22a25.39 25.39 0 0 0 8.86 2 25.3 25.3 0 0 0 8.82-2 1.09 1.09 0 0 0 .69-1.29zM16 2.16a1.42 1.42 0 0 1 1.86.45c.56.63.66 1.5.22 1.89a1 1 0 0 1-.91.16h-.11a5.84 5.84 0 0 0-1.34-1.5.38.38 0 0 0 0-.15 1 1 0 0 1 .28-.85zM12.49 3a4.63 4.63 0 0 1 4.34 3.72 7.22 7.22 0 0 1-1.59-.63 4.7 4.7 0 0 1-2.11-2.28.5.5 0 0 0-.57-.3.51.51 0 0 0-.39.51A2.44 2.44 0 0 1 11 6.11 5.39 5.39 0 0 1 8.09 7a4.65 4.65 0 0 1 4.4-4zM8 8a6.47 6.47 0 0 0 3.53-1 3.82 3.82 0 0 0 1.37-1.58A6 6 0 0 0 14.75 7a8.23 8.23 0 0 0 2.25.79v.23a5.1 5.1 0 0 1-2.4 4.43 3.07 3.07 0 0 1-.31.17.5.5 0 0 0-.28.5V16H11v-2.86a.49.49 0 0 0-.28-.5l-.3-.17A5.09 5.09 0 0 1 8 8zM4 21l1.19-4.1A4.09 4.09 0 0 1 9.11 14H10v8.8a25 25 0 0 1-5.94-1.69Q4 21.07 4 21zm8.53 2c-.48 0-1 0-1.49-.09V17h3v5.87a.43.43 0 0 0 0 .05 13 13 0 0 1-1.51.08zm8.4-1.91a26.25 26.25 0 0 1-5.93 1.7V14h.87a4.09 4.09 0 0 1 3.92 2.89L21 21a.1.1 0 0 1-.07.11z" />
            </svg>
          }
          <span className="text-sm">Female</span>
        </div>
        <div className="flex p-2 text-gray-500">
          <Image
            width="20px"
            height="20px"
            src="/Birthday.svg"
            className="min-h-[20px] min-w-[20px]"
          ></Image>
          <span className="text-sm ml-2">Born Sep 30,2000</span>
        </div>
        <div className="flex p-2">
          <Image
            width="22px"
            height="22px"
            src="/Location.svg"
            className="min-h-[22px] min-w-[22px]"
          ></Image>
          <span className="text-sm ml-2  text-gray-500">Islamabad</span>
        </div>
        <div className="flex p-2 text-gray-500">
          <Image
            width="20px"
            height="20px"
            src="/Facebook.svg"
            className="min-h-[20px] min-w-[20px]"
          ></Image>
          <a href="/" className="text-sm ml-2 text-center">
            Facebook
          </a>
        </div>
        <div className="flex p-2 text-gray-500">
          <Image
            width="20px"
            height="20px"
            src="/Twitter.svg"
            className="min-h-[20px] min-w-[20px]"
          ></Image>
          <a href="/" className="text-sm ml-2 text-center">
            Twitter
          </a>
        </div>
        <div className="flex p-2 text-gray-500">
          <Image
            width="20px"
            height="20px"
            src="/Instagram.svg"
            className="min-h-[20px] min-w-[20px] "
          ></Image>
          <a href="/" className="text-sm ml-2 text-center">
            Instagram
          </a>
        </div>
        <div className="text-sm text-gray-700 p-2 mt-2">
          <h6>52,8469 Followers</h6>
        </div>
        <div className="text-sm text-gray-700 px-2 py-1">
          <h6>2590 Followings</h6>
        </div>
        <div className="text-center">
          <button className="mt-2 px-6 py-2 text-center text-sm bg-gray-50 rounded-md hover:bg-gray-300 shadow-sm hover:shadow-md">
            <span>Edit Details</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default UserInforBar;
