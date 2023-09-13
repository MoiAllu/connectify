import React from "react";
import Friend from "./Friend";
import friends from "./friends.json";
import Link from "next/link";

type Props = {
  user: {
    id: number;
    name: string;
    email: string;
    profilePicture: string;
    createdAt: string;
    updatedAt: string;
    friends: any;
  };
};

const FriendsList = (props: Props) => {
  const { user } = props;
  return (
    <div className="flex flex-col items-center gap-3 w-full">
      {user.friends.map((friend: any) => (
        <Friend key={friend.userId} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsList;
