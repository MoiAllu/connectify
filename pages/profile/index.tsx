import type { NextPage } from "next";
import Head from "next/head";
import BirthdayCard from "../../components/Cards/BirthdayCard";
import CreatePost from "../../components/Cards/CreatePost";
import FollowSuggestion from "../../components/Cards/FollowSuggestion";
import UpcomingBirthdays from "../../components/Cards/UpcomingBirthdays";
import UserInforBar from "../../components/Cards/UserInfoBar";
import UserProfile from "../../components/Cards/UserProfile";

import Post from "../../components/Feed/Post";

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>Connectify | Profile</title>
        <meta
          name="description"
          content="Connectify is a social media app made by Ali and Talal."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-[calc(100vh-70px)]">
        <UserProfile />
        <div className="flex justify-center bg-gray-50 px-4 mt-4">
          <div className="mr-4 mt-8">
            <UserInforBar />
          </div>
          <div className="mr-2">
            <CreatePost />
            <Post />
          </div>
          <div className="flex-col mt-8">
            <div className="mb-6">
              <BirthdayCard />
            </div>
            <div className="mb-6">
              <FollowSuggestion />
            </div>
            <UpcomingBirthdays />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
