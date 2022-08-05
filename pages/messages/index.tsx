import type { NextPage } from "next";
import Head from "next/head";
import ChatWindow from "../../components/ChatWindow";

const Messages: NextPage = () => {
  return (
    <>
      <Head>
        <title>Connectify | Messages</title>
        <meta
          name="description"
          content="Connectify is a social media app made by Ali and Talal."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center min-h-[calc(100vh-70px)] relative top-[70px] lg:top-0 h-full bg-gray-50 px-4 rounded-2xl">
        <ChatWindow />
      </div>
    </>
  );
};

export default Messages;
