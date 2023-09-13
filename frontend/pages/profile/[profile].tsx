import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import UpdatePicture from "../../components/Cards/UpdatePicure";
import UserInforBar from "../../components/Cards/UserInfoBar";
import UserProfile from "../../components/Cards/UserProfile";
import { FeedAnimation } from "../../components/Feed/feedAnimation";
import Post from "../../components/Feed/Post";
import ModelOverlay from "../../components/UI/ModalOverlay";
import { useGetUser, useMe } from "../../lib/hooks/useMe";
import { useRouter } from "next/router";
import Connectify from "../../components/Cards/Connectify";
const FriendProfile: NextPage = () => {
  const router = useRouter();
  const { user: me } = useMe();
  const [profileButton, setProfileButton] = useState(false);
  const { profile } = router.query;
  const friend = profile?.toString().split("-")[0];
  const { user, isError, isLoading } = useGetUser(Number(friend));
  if (user?.id === me?.id) {
    router.push("/profile");
  }
  const owner = false;

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
      {user ? (
        <div className="min-h-[calc(100vh-70px)]">
          <UserProfile
            user={user}
            owner={owner}
            setProfileButton={setProfileButton}
          />
          <div className="flex justify-center sm:bg-gray-50 sm:px-4 mt-4">
            <div className="lg:mr-4 mt-8">
              <UserInforBar user={user} owner={owner} />
            </div>
            <div className="sm:mr-2 md:min-w-[80%] w-[100%]">
              {user.posts?.map((post: any) => {
                return (
                  <div className="flex flex-col gap-4" key={post.id}>
                    <Post post={post} />
                  </div>
                );
              })}
            </div>
          </div>
          {profileButton && (
            <ModelOverlay setProfileButton={setProfileButton}>
              <UpdatePicture setProfileButton={setProfileButton} user={user} />
            </ModelOverlay>
          )}
        </div>
      ) : (
        <FeedAnimation />
      )}
    </>
  );
};

export default FriendProfile;
