import React from "react";
import Image from "next/image";
import { FriendType } from "../../interfaces";
import moment from "moment";

type Props = {
  friend: any;
};

const Friend: React.FC<Props> = ({ friend }) => {
  console.log(friend);
  return (
    <div className="flex items-center justify-between w-full gap-3">
      <Image
        className="rounded-full"
        src={friend.user.profilePicture || "/square.jpg"}
        alt="Avatar Image"
        objectFit="fill"
        width={40}
        height={40}
      />
      <p className="flex-1 truncate font-semibold">{friend.user.name}</p>
      {/* {Math.floor(Date.now() / 1000) - friend.updatedAt < 60 ? (
        <span className="w-2 h-2 rounded-full bg-green-400"></span>
      ) : (
        <span className="text-xs">
          {moment.unix(friend.updatedAt).fromNow()}
        </span>
      )} */}
    </div>
  );
};

export default Friend;
