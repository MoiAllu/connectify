import React from "react";
import Image from "next/image";
import moment from "moment";
type Props = {
  person: "sender" | "receiver";
};

const Message: React.FC<Props> = ({ person }) => {
  return (
    <div
      className={`flex flex-col ${
        person === "sender" ? "items-end" : "items-start"
      }`}
    >
      <div
        className={`flex ${
          person === "sender" ? "flex-row-reverse" : "flex-row"
        } gap-2 max-w-[80%]`}
      >
        {/* Image */}
        <div className="flex flex-col-reverse">
          <Image
            className="rounded-full min-w-[28px] min-h-[28px]"
            src={"/square.jpg"}
            alt="Avatar Image"
            objectFit="contain"
            width={50}
            height={50}
          />
        </div>
        {/* Message */}
        <div
          className={`${
            person === "sender" ? "bg-gray-100" : "bg-blue-400"
          } p-4 rounded-2xl`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et architecto
          tempora necessitatibus eaque fuga! Natus recusandae iste rem accusamus
          hic, voluptates aperiam autem obcaecati corrupti quisquam sunt itaque
          iusto! Suscipit!
        </div>
        {/* 3 Dots */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-gray-500 cursor-pointer"
            width="28"
            height="28"
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
        <p className="text-sm">{moment.unix(1588888888).fromNow()}</p>
      </div>
    </div>
  );
};

export default Message;
