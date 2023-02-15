import React from "react";
import Image from "next/image";
import moment from "moment";

type Props = {};

const PersonChat = (props: Props) => {
  return (
    <div className="flex justify-between items-center w-full p-2 pb-4 border-b min-w-[272px] hover:bg-gray-100 transition-all">
      <div className="flex justify-between items-center gap-3">
        <div className="w-[40px] h-[40px]">
          <Image
            className="rounded-full"
            src={"/square.jpg"}
            alt="Avatar Image"
            objectFit="contain"
            width={40}
            height={40}
          />
        </div>
        <div className="flex flex-col flex-1">
          <p className="font-semibold truncate max-w-[150px]">
            Josephine Frida
          </p>
          <p className="text-xs truncate max-w-[150px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            minima necessitatibus cumque ex ipsam mollitia explicabo aliquid,
            atque accusantium eaque obcaecati voluptatum perferendis, totam
            autem quod dolore nesciunt assumenda hic.m
          </p>
        </div>
      </div>

      <div className=" flex flex-col items-end text-sm pt-1 min-w-[57px]">
        {moment.unix(1588888888).format("hh:mm a")}
        <div className="bg-red-400 text-white text-center px-1">
          <span>1</span>
        </div>
      </div>
    </div>
  );
};

export default PersonChat;
