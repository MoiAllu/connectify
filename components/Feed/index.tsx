import React from "react";
import BirthdayCard from "../Cards/BirthdayCard";
import CreatePost from "../Cards/CreatePost";
import FollowSuggestion from "../Cards/FollowSuggestion";
import UpcomingBirthdays from "../Cards/UpcomingBirthdays";
import Post from "./Post";

type Props = {};

const Feed = (props: Props) => {
  return (
    <div className="w-full flex gap-4">
      <div className="min-w-[70%] flex-col">
        <CreatePost />
        <div className="flex 2xl:hidden gap-4 overflow-auto mb-2 pb-2">
          <FollowSuggestion />
          <BirthdayCard />
          <UpcomingBirthdays />
        </div>
        <Post />
      </div>
      <div className="hidden 2xl:flex flex-col flex-1 gap-4 py-8">
        <FollowSuggestion />
        <BirthdayCard />
        <UpcomingBirthdays />
      </div>
    </div>
  );
};

export default Feed;
