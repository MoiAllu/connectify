import type { NextPage } from "next";
import Head from "next/head";

const Feed: NextPage = () => {
  return (
    <>
      <Head>
        <title>Connectify</title>
        <meta
          name="description"
          content="Connectify is a social media app made by Ali and Talal."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center h-screen bg-gray-50 px-4">
        Feed
      </div>
    </>
  );
};

export default Feed;
