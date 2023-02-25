import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import BirthdayCard from "../../components/Cards/BirthdayCard";
import CreatePost from "../../components/Cards/CreatePost";
import FollowSuggestion from "../../components/Cards/FollowSuggestion";
import UpcomingBirthdays from "../../components/Cards/UpcomingBirthdays";
import UpdatePicture from "../../components/Cards/UpdatePicure";
import UserInforBar from "../../components/Cards/UserInfoBar";
import UserProfile from "../../components/Cards/UserProfile";
import { FeedAnimation } from "../../components/Feed/feedAnimation";
import Post from "../../components/Feed/Post";
import ModelOverlay from "../../components/UI/ModalOverlay";
import { useMe } from "../../lib/hooks/useMe";
import { usePost } from "../../lib/hooks/usePost";

const Profile: NextPage = () => {
  const { user } = useMe();
  const { posts, isLoading } = usePost();
  const [profileButton, setProfileButton] = useState(false);
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
      {
        <div className="min-h-[calc(100vh-70px)]">
          <UserProfile user={user} setProfileButton={setProfileButton} />
          <div className="flex justify-center bg-gray-50 px-4 mt-4">
            <div className="mr-4 mt-8">
              <UserInforBar user={user} />
            </div>
            {isLoading ? (
              <FeedAnimation />
            ) : (
              <div className="mr-2">
                <CreatePost />
                {posts?.map((post: any) => {
                  return (
                    <div className="flex flex-col gap-4" key={post.id}>
                      <Post post={post} />
                    </div>
                  );
                })}
              </div>
            )}
            <div className="md:flex-col mt-8 hidden">
              <div className="mb-6">
                <BirthdayCard />
              </div>
              <div className="mb-6">
                <FollowSuggestion />
              </div>
              <UpcomingBirthdays />
            </div>
          </div>
          {profileButton && (
            <ModelOverlay setProfileButton={setProfileButton}>
              <UpdatePicture setProfileButton={setProfileButton} user={user} />
            </ModelOverlay>
          )}
        </div>
      }
    </>
  );
};

export default Profile;
