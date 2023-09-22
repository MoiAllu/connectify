import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import CreatePost from "../components/Cards/CreatePost";
import FollowSuggestion from "../components/Cards/FollowSuggestion";
import BirthdayCard from "../components/Cards/BirthdayCard";
import UpcomingBirthdays from "../components/Cards/UpcomingBirthdays";
import { useAllUsers, useMe } from "../lib/hooks/useMe";
type Props = {};
const Home: NextPage = (props: Props) => {
  // console.log(props);
  const { users } = useAllUsers();
  const { user: author } = useMe();
  const filterUser = users?.filter(
    (user: any) =>
      user.id !== author.id &&
      !author.friendsrequests
        .map((friend: any) => friend.friendId)
        .includes(user.id)
  );
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
      <div className="flex-col justify-center min-h-[calc(100vh-70px)] py-2 sm:pt-[70px] lg:pt-0 sm:px-4">
        <CreatePost />
        <div className="flex 2xl:hidden gap-4 overflow-auto mb-2 pb-2">
          {filterUser?.map((user: any) => {
            return (
              <FollowSuggestion author={author} user={user} key={user.id} />
            );
          })}
          <BirthdayCard />
          <UpcomingBirthdays />
        </div>
        <Feed users={users} user={author} />
      </div>
    </>
  );
};

export default Home;
