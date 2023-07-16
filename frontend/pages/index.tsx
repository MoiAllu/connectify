import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import CreatePost from "../components/Cards/CreatePost";
import FollowSuggestion from "../components/Cards/FollowSuggestion";
import BirthdayCard from "../components/Cards/BirthdayCard";
import UpcomingBirthdays from "../components/Cards/UpcomingBirthdays";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Connectify | Feed</title>
        <meta
          name="description"
          content="Connectify is a social media app made by Ali and Talal."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex-col justify-center min-h-[calc(100vh-70px)] py-2 sm:pt-[70px] lg:pt-0 px-4">
        <CreatePost />
        <div className="flex 2xl:hidden gap-4 overflow-auto mb-2 pb-2">
          <FollowSuggestion />
          <BirthdayCard />
          <UpcomingBirthdays />
        </div>
        <Feed />
      </div>
    </>
  );
};

export default Home;
