import React from "react";
import CreatePost from "../Cards/CreatePost";

type Props = {};

const Feed = (props: Props) => {
  return (
    <div className="w-full flex">
      <div className="min-w-[70%] flex-1">
        <CreatePost />
        <div>Posts</div>
      </div>
      <div className="hidden xl:flex flex-col flex-1">
        <div>Card 1</div>
        <div>Card 2</div>
        <div>Card 3</div>
        <div>Card 4</div>
      </div>
    </div>
  );
};

export default Feed;
