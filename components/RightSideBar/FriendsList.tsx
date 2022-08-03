import React from "react";
import Friend from "./Friend";
import friends from "./friends.json";

type Props = {};

const FriendsList = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-3 w-full">
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsList;
