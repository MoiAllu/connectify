import React, { useState } from "react";
import Image from "next/image";
import createPost from "../../lib/Utilities/createPost";
import { useMe } from "../../lib/hooks/useMe";
type Props = {};

const CreatePost = (props: Props) => {
  const [content, setContent] = useState("");
  const { user } = useMe();
  const [resResult, setResResult] = useState({
    error: undefined,
    success: undefined,
  });
  const formSubmitHanlder = async (e: any) => {
    e.preventDefault();
    const userId = await user.id;
    const respone = await createPost("/post", { content, user, userId });
    setResResult(respone);
  };
  return (
    <div className="w-full px-1 py-8">
      {resResult.success ? (
        <div className="text-gray-600 bg-white rounded-md p-3">
          <h1>{resResult.success}</h1>
        </div>
      ) : (
        <form
          className="bg-white rounded-xl px-2 py-3 shadow-md"
          onSubmit={formSubmitHanlder}
        >
          <div className=" flex p-2 text-left gap-2 mb-3 ">
            <Image
              className="rounded-full"
              src="/square.jpg"
              alt="Avatar"
              objectFit="fill"
              width={50}
              height={40}
            />
            <div className="w-full flex ">
              <div
                className={`${
                  resResult.error
                    ? "bg-red-100 px-1 py-2 rounded-lg w-full focus:shadow-lg"
                    : " bg-gray-50 px-1 py-2 rounded-lg w-full focus:shadow-lg"
                }`}
              >
                <input
                  className={`${
                    resResult.error
                      ? " w-full bg-red-100 p-0.5 outline-none "
                      : "w-full bg-gray-50 p-0.5 outline-none "
                  } `}
                  required
                  type="text"
                  placeholder=" What's happening?"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          {resResult && (
            <h2 className="text-red-600 ml-4">{resResult?.error}</h2>
          )}
          <div className="gap-2 px-3 hidden text-gray-900 sm:flex">
            <button className="flex p-2 flex-1" type="button">
              <div className="py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
                  <rect x="3" y="6" width="12" height="12" rx="2" />
                </svg>
              </div>
              <h3 className="text-center p-2 text-sm">Live Video</h3>
            </button>
            <button className="gap-1 flex p-2 flex-1" type="button">
              <div className="py-2 ">
                <Image
                  width="20px"
                  height="20px "
                  src="/Photoicon.svg"
                  alt="Photo"
                ></Image>
              </div>
              <h3 className=" p-2 text-sm  text-left">Photo Video</h3>
            </button>
            <button className="flex py-2 flex-1 " type="button">
              <div className="py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-mood-smile"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <line x1="9" y1="10" x2="9.01" y2="10" />
                  <line x1="15" y1="10" x2="15.01" y2="10" />
                  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                </svg>
              </div>
              <h3 className="text-center p-2 text-sm">Feeling</h3>
            </button>
            <div className="text-right  mt-2  sm:min-w-[50px]">
              <button
                className="px-7 py-2 text-white  bg-blue-500 rounded-md  hover:shadow-lg"
                onSubmit={formSubmitHanlder}
              >
                Post
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
export default CreatePost;
