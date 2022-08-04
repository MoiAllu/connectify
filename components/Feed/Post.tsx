import React from "react";
import Image from "next/image";
import moment from "moment";
type Props = {};

const Post: React.FC<Props> = ({}) => {
  return (
    <div className="bg-white w-full rounded-3xl flex flex-col px-6 py-4 gap-3">
      {/* Person */}
      <div className="flex justify-between gap-3">
        <Image
          className="rounded-full"
          src={"/square.jpg"}
          alt="Avatar Image"
          objectFit="fill"
          width={40}
          height={40}
        />
        <div className="flex flex-col flex-1">
          <p className="font-semibold">Josephine</p>
          <p className="text-sm">
            {moment.unix(1588888888).fromNow()} | {"Public"}
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-gray-500 cursor-pointer"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => {
            console.log("Friends Clicked");
          }}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="5" cy="12" r="1" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
        </svg>
      </div>

      {/* Post Body & Image */}
      <div className="flex flex-col gap-3">
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit, harum. Sunt voluptatem veniam nemo excepturi maxime et
          commodi deleniti voluptates sit. Sint dolor quas molestias illo optio
          porro labore! Exercitationem.
        </p>
        <Image
          src={"/post.jpg"}
          alt="Post Pic"
          className="rounded-3xl"
          width={300}
          height={200}
          layout="responsive"
        />
        <div className="flex justify-between gap-6 text-sm lg:text-md">
          <div className="flex-1">
            <button className="hover:underline underline-offset-1">
              9 Likes
            </button>
          </div>
          <button className="hover:underline underline-offset-1">
            3 Comments
          </button>
          <p className="cursor-default">7 Shares</p>
        </div>
      </div>
      {/* Controls */}
      <div className="flex justify-between border-t border-b py-3 text-sm lg:text-md">
        <button className="flex items-center gap-1 fill-transparent stroke-black hover:fill-red hover:stroke-red transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="inherit"
            fill="inherit"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
          Like
        </button>
        <button className="flex items-center gap-1 fill-transparent stroke-black hover:fill-emerald-100 hover:stroke-black transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="inherit"
            fill="inherit"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
            <line x1="8" y1="9" x2="16" y2="9" />
            <line x1="8" y1="13" x2="14" y2="13" />
          </svg>
          Comments
        </button>
        <button className="flex items-center gap-1 stroke-black hover:stroke-blue fill-transparent transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="inherit"
            fill="inherit"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 13l4 -4l-4 -4m4 4h-11a4 4 0 0 0 0 8h1" />
          </svg>
          Share
        </button>
      </div>
      {/* Comment */}
      <div className="flex justify-between items-center gap-4">
        <Image
          className="rounded-full min-w-[28px] min-h-[28px]"
          src={"/square.jpg"}
          alt="Avatar Image"
          objectFit="fill"
          width={40}
          height={40}
        />
        <input
          type="text"
          className="bg-gray-50 shadow-sm flex-1 p-1.5 rounded-lg outline-none"
          placeholder="Write a comment"
        />
        <button className="bg-sky-200 hover:bg-sky-300 p-1.5 rounded-lg">
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
  );
};

export default Post;