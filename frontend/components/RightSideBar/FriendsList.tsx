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
    friendsrequests: any;
  };
};

const FriendsList = (props: Props) => {
  const { user } = props;
  const filterFriends = user.friends.filter((friend: any) => {
    return user.friendsrequests.some(
      (friendrequest: any) =>
        friendrequest.friendId === friend.user.id &&
        friendrequest.userId === user.id
    );
  });

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      {filterFriends.map((friend: any) => (
        <Friend key={friend.userId} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsList;
