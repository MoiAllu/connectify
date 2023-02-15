import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";

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
      <div className="flex justify-center min-h-[calc(100vh-70px)] py-2 pt-[70px] lg:pt-0 px-4">
        <Feed />
      </div>
    </>
  );
};

export default Home;
