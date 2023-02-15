import React, { useEffect } from "react";
import { useAllPosts, usePost } from "../../lib/hooks/usePost";
import BirthdayCard from "../Cards/BirthdayCard";
import { motion } from "framer-motion";
import CreatePost from "../Cards/CreatePost";
import FollowSuggestion from "../Cards/FollowSuggestion";
import UpcomingBirthdays from "../Cards/UpcomingBirthdays";
import { FeedAnimation } from "./feedAnimation";
import Post from "./Post";
type Props = {};
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
const Feed = (props: Props) => {
  const { posts, isLoading } = useAllPosts();
  return isLoading ? (
    <FeedAnimation />
  ) : (
    <motion.div className="w-full flex gap-4">
      <motion.div
        className="min-w-[70%] flex-col"
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <CreatePost />
        <motion.div className="flex 2xl:hidden gap-4 overflow-auto mb-2 pb-2">
          <FollowSuggestion />
          <BirthdayCard />
          <UpcomingBirthdays />
        </motion.div>
        {posts?.map((post: any) => {
          return (
            <motion.div
              className="flex flex-col gap-4"
              key={post.id}
              variants={item}
            >
              <Post post={post} />
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div className="hidden 2xl:flex flex-col flex-1 gap-4 py-8">
        <FollowSuggestion />
        <BirthdayCard />
        <UpcomingBirthdays />
      </motion.div>
    </motion.div>
  );
};

export default Feed;
