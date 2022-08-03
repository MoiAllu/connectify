import React from "react";
import Image from "next/image";

type Props = {};

const CreatePost = (props: Props) => {
  return (
    <div className="w-full px-5 py-10">
      <div className=" bg-white z-50 p-2 rounded-lg w-[calc(100vw-900px)] min-w-[300px] ">
        <div className=" flex p-2 text-left gap-2 ">
          <Image
            className="rounded-xl"
            src="/square.jpg"
            alt="Rounded avatar"
            objectFit="fill"
            width={40}
            height={40}
          />
          <form className="w-full">
            <div className="bg-gray-50 px-1 py-2 rounded-lg w-full focus:shadow-lg">
              <input
                className="w-full bg-gray-50 p-0.5 outline-none "
                type="text"
                placeholder=" What's happening?"
              ></input>
            </div>
            <div></div>
          </form>
          <Image width="50px" height="50px " src="/Photoicon.svg"></Image>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
