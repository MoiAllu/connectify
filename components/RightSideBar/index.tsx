import React from "react";
import FriendsList from "./FriendsList";

type Props = {};

const RightSideBar = (props: Props) => {
  return (
    <div className="hidden lg:flex flex-col items-center fixed bottom-0 right-0 w-[18vw] min-h-[calc(100vh-70px)] bg-white gap-3 py-1 px-4">
      {/* Search */}
      <div className="flex items-center px-1 py-1 rounded-lg max-h-[35px] text-[14px] border border-gray-300 focus:shadow-sm w-full">
        <svg
          className=" fill-gray-500 p-1  min-w-[30px] min-h-[30px]  "
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
        </svg>
        <input
          className="flex-1 p-1 rounded-lg max-h-[35px] text-[14px]  outline-none focus:outline-none w-full "
          id="searchbox"
          placeholder="Search friends!"
          type="search"
        ></input>
        <label htmlFor="searchbox"></label>
      </div>

      {/* Friends List */}
      <div className="flex justify-between w-full">
        <h5 className="font-semibold">Friends</h5>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="5" cy="12" r="1" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
        </svg>
      </div>
      <FriendsList />
    </div>
  );
};

export default RightSideBar;
