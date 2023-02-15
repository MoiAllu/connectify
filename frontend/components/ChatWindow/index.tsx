import moment from "moment";
import React from "react";
import Image from "next/image";
import Message from "./Message";

type Props = {};

const ChatWindow = (props: Props) => {
  const isActive = true;
  return (
    <div className="bg-white w-full hidden lg:flex flex-col h-[calc(100vh-100px)] p-4 my-4 rounded-2xl shadow-md">
      <div className="flex justify-between w-full p-2 pb-4 border-b-2">
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
            <p className="font-semibold">Josephine Frida</p>
            {isActive ? (
              <div className="flex items-center gap-3">
                <p className="text-sm text-gray-400">Active now</p>
                <div className="w-2 h-2 relative top-0.5 bg-green-600 rounded-full"></div>
              </div>
            ) : (
              <p className="text-sm">{moment.unix(1588888888).fromNow()}</p>
            )}
          </div>
        </div>
      </div>

      {/* Chat */}
      <div className="flex-1 overflow-auto scrollbar-light my-2 flex flex-col gap-3">
        <Message person={"receiver"} />
        <Message person={"sender"} />
        <Message person={"receiver"} />
        <Message person={"sender"} />
        <Message person={"receiver"} />
        <Message person={"sender"} />
      </div>

      {/* Message */}
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
          placeholder="Send a message"
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

export default ChatWindow;
