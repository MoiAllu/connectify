import Image from "next/image";
import React, { Fragment } from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Fragment>
      <div className="flex fixed z-[2] max-h-[70px] h-[70px] w-full bg-white">
        <div className="max-h-[70px] md:min-w-[18vw]  py-4 px-2 text-left ">
          <h3 className="logo pl-[12%] py-1 text-[1.2rem] lg:text-[1.6rem]">
            Connectify
          </h3>
        </div>
        <div className="hidden sm:flex max-h-[70px] py-4 text-gray-600 ">
          <div className="flex px-1 py-1 rounded-lg max-h-[35px] text-[14px] outline outline-gray-300 focus:shadow-sm  w-[calc(100vw-500px)] min-w-[250px] max-w-[500px] ">
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
            <div className="">
              <input
                className="p-1 rounded-lg max-h-[35px] text-[14px]  w-[calc(100vw-500px)] min-w-[200px] max-w-[450px]  outline-none focus:outline-none  "
                id="searchbox"
                placeholder="Search for something here..."
                type="search"
              ></input>
            </div>
            <label htmlFor="searchbox"></label>
          </div>
        </div>
        <div className="sm:hidden flex max-h-[70px] text-right w-full justify-end py-4 px-2 ">
          <button className="">
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
          </button>
        </div>
        <div className="max-h-[70px] hidden sm:flex  text-right w-full justify-end py-4 px-2">
          <div className="hover:shadow-md rounded-xl justify-center items-center flex cursor-pointer">
            <a href="/home" className="text-black m-1 p-1 ">
              UserName
            </a>
            <Image
              className="rounded-xl"
              src="/square.jpg"
              alt="Rounded avatar"
              objectFit="fill"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
