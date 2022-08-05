import Link from "next/link";
import Image from "next/image";
import React from "react";

type Props = {};

const BirthdayCard = (props: Props) => {
  return (
    <div className="px-1 min-w-[290px] max-w-[290px] h-[175px]">
      <div className="w-full bg-white rounded-xl p-4 shadow-md">
        {/* Upper */}
        <div className="flex justify-between border-b py-1">
          <p className="font-semibold">Birthdays</p>
          <Link href="/">
            <span className="text-blue-500 hover:underline underline-offset-1 cursor-pointer">
              See all
            </span>
          </Link>
        </div>

        {/* Card */}
        <div className="flex py-4 gap-4 pl-3">
          <Image
            className="rounded-lg"
            src={"/square.jpg"}
            alt="Avatar Image"
            objectFit="fill"
            width={40}
            height={40}
          />
          <div className="flex-1">
            <p className="font-semibold">Frida Peterson</p>
            <p className="text-xs">Birthday Today</p>
          </div>
        </div>
        <div className="flex gap-2 px-2">
          <input
            type="text"
            className="bg-gray-50 shadow-sm flex-1 px-2 rounded-lg outline-none"
            placeholder="Write on his inbox"
          />
          <button className="bg-sky-200 hover:bg-sky-300 p-1 rounded-lg">
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
              <line x1="10" y1="14" x2="21" y2="3" />
              <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
