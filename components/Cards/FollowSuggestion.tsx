import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {};

const FollowSuggestion = (props: Props) => {
  return (
    <div className="px-1 min-w-[290px] max-w-[290px] h-[175px]">
      <div className="w-full p-4 bg-white rounded-xl shadow-md">
        {/* Upper */}
        <div className="flex justify-between border-b py-1">
          <p className="font-semibold">You Might Like</p>
          <Link href="/">
            <span className="text-blue hover:underline underline-offset-1 cursor-pointer">
              See all
            </span>
          </Link>
        </div>

        {/* Card */}
        <div className="flex py-4 gap-4 pl-3">
          <Image
            className="rounded-full"
            src={"/square.jpg"}
            alt="Avatar Image"
            objectFit="fill"
            width={40}
            height={40}
          />
          <div className="flex-1">
            <p className="font-semibold">Frida Peterson</p>
            <p className="text-xs">Founder & CEO at Connectify</p>
          </div>
        </div>

        {/* <div className="flex w-full items-center justify-center">
          <p>Icon 1</p>
          <p>Icon 1</p>
          <p>Icon 1</p>
          <p>Icon 1</p>
        </div> */}

        <div className="flex gap-6 justify-between px-4">
          <button className="flex-1 py-1.5 border text-gray-500 rounded-lg hover:shadow-md">
            Ignore
          </button>
          <button className="flex-1 py-1.5 text-white bg-blue rounded-lg hover:shadow-lg">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default FollowSuggestion;
