import Link from "next/link";
import React from "react";
import Image from "next/image";
import routeHandler from "../../lib/Utilities/friends/routeHandler";
import { includes } from "lodash";

type Props = {
  author: any;
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
const FollowSuggestion = (props: Props) => {
  const { user, author } = props;
  const [isFollowingLoading, setIsFollowingLoading] = React.useState(false);
  const [isFollowing, setIsFollowing] = React.useState(false);
  const [sendedRequest, setSendedRequest] = React.useState({ error: "" });
  const followHandler = async (e: any) => {
    e.preventDefault();
    setIsFollowingLoading(true);
    setSendedRequest({ error: "" });
    const response = await routeHandler({
      userId: author.id,
      friendId: user.id,
    });
    console.log(response);
    setSendedRequest(response);
    if (response.error) {
      setIsFollowing(false);
      setIsFollowingLoading(false);
      return;
    }
    setIsFollowingLoading(false);
    setIsFollowing(true);
  };
  const followBack = author.friends
    .map((friend: any) => friend.user.id)
    .includes(user.id);

  return (
    <div className="px-1 min-w-[290px] max-w-[290px] h-[175px]">
      <div className="w-full p-4 bg-white rounded-xl shadow-md">
        {/* Upper */}
        <div className="flex justify-between border-b py-1">
          <p className="font-semibold">You Might Like</p>
          <Link href="/">
            <span className="text-blue-500 hover:underline underline-offset-1 cursor-pointer">
              See all
            </span>
          </Link>
        </div>

        {/* Card */}
        <div className="flex py-4 gap-4 pl-3">
          <Image
            className="rounded-full"
            src={"/square.jpg" || user?.profilePicture}
            alt="Avatar Image"
            objectFit="fill"
            width={40}
            height={40}
          />
          <div className="flex-1">
            <p className="font-semibold">{user?.name}</p>
            <p className="text-xs">Founder & CEO at Connectify</p>
          </div>
        </div>

        {/* <div className="flex w-full items-center justify-center">
          <p>Icon 1</p>
          <p>Icon 1</p>
          <p>Icon 1</p>
          <p>Icon 1</p>
        </div> */}
        {sendedRequest.error && (
          <p className="text-red-500 text-sm ">{sendedRequest.error}</p>
        )}
        {followBack ? (
          <div className="flex gap-6 justify-between px-4">
            {!isFollowingLoading && !isFollowing && (
              <button
                className="flex-1 py-1.5 border text-gray-500 rounded-lg hover:shadow-md"
                disabled={isFollowingLoading}
              >
                Ignore
              </button>
            )}
            {isFollowing ? (
              <button
                className="flex-1 py-1.5 text-white bg-gray-500 rounded-lg hover:shadow-lg"
                disabled={isFollowingLoading}
              >
                Accepted
              </button>
            ) : isFollowingLoading ? (
              <button
                className="flex-1 py-1.5 text-white bg-gray-500 rounded-lg hover:shadow-lg"
                disabled={isFollowingLoading}
              >
                Loading...
              </button>
            ) : (
              <button
                className="flex-1 py-1.5 text-white bg-blue-500 rounded-lg hover:shadow-lg "
                onClick={followHandler}
                disabled={isFollowingLoading}
              >
                Accept
              </button>
            )}
          </div>
        ) : (
          <div className="flex gap-6 justify-between px-4">
            {!isFollowingLoading && !isFollowing && (
              <button
                className="flex-1 py-1.5 border text-gray-500 rounded-lg hover:shadow-md"
                disabled={isFollowingLoading}
              >
                Ignore
              </button>
            )}
            {isFollowing ? (
              <button
                className="flex-1 py-1.5 text-white bg-gray-500 rounded-lg hover:shadow-lg"
                disabled={isFollowingLoading}
              >
                Following
              </button>
            ) : isFollowingLoading ? (
              <button
                className="flex-1 py-1.5 text-white bg-gray-500 rounded-lg hover:shadow-lg"
                disabled={isFollowingLoading}
              >
                Loading...
              </button>
            ) : (
              <button
                className="flex-1 py-1.5 text-white bg-blue-500 rounded-lg hover:shadow-lg "
                onClick={followHandler}
                disabled={isFollowingLoading}
              >
                Follow
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FollowSuggestion;
