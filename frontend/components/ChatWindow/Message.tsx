import React from "react";
import Image from "next/image";
import moment from "moment";
type Props = {
  message: string;
  createdAt: any;
  isSender: boolean;
  profilePicture: string;
  image: string;
};

const Message: React.FC<Props> = (props: Props) => {
  const { message, createdAt, isSender, profilePicture, image } = props;
  const person = isSender ? "sender" : "receiver";
  return (
    <div
      className={`flex flex-col ${
        person === "sender" ? "items-end" : "items-start"
      }`}
    >
      <div
        className={`flex ${
          person === "sender" ? "flex-row-reverse" : "flex-row"
        } gap-2 max-w-[80%] justify-center items-center`}
      >
        {/* Image */}
        <div className="flex flex-col-reverse">
          <Image
            className="rounded-full min-w-[28px] min-h-[28px]"
            src={"/square.jpg"}
            alt="Avatar Image"
            objectFit="contain"
            width={30}
            height={30}
          />
        </div>
        {/* Message */}
        <div
          className={`${
            person === "sender" ? "bg-gray-100" : "bg-blue-400"
          } p-3 rounded-2xl`}
        >
          {message && <p className="text-sm">{message}</p>}
        </div>
        {/* 3 Dots */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-gray-500 cursor-pointer"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="5" cy="12" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
          </svg>
        </div>
      </div>
      <div className={`mx-8`}>
        <p className="text-xs">{moment.unix(1588888888).fromNow()}</p>
      </div>
    </div>
  );
};

export default Message;
