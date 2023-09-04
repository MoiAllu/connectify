import type { NextPage } from "next";
import Head from "next/head";
import ChatLayout from "../../components/Layout/ChatLayout";
import { useMe } from "../../lib/hooks/useMe";
import React from "react";
import BackdropOverlay from "../../components/UI/BackdropOverlay";
import DeleteMessage from "./DeleteMessage";
const Messages: NextPage = () => {
  const user = useMe();
  const [deleteBackdropHandler, setDeleteBackdropHandler] =
    React.useState(false);
  const [deleteMessageData, setDeleteMessageData] = React.useState({
    userId: 0,
    messageId: 0,
    conversationId: 0,
  });
  const [allMessages, setAllMessages] = React.useState({});
  const [deleteMessage, setDeleteMessage] = React.useState({} as any);
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
      <div className="flex items-center min-h-[calc(100vh-70px)] relative sm:top-[70px] lg:top-0 h-full bg-gray-50 px-4 rounded-2xl gap-3">
        <ChatLayout
          {...user}
          setDeleteBackdropHandler={setDeleteBackdropHandler}
          setDeleteMessageData={setDeleteMessageData}
          setAllMessages={setAllMessages}
          allMessages={allMessages}
        />
        {deleteBackdropHandler && (
          <BackdropOverlay handler={setDeleteBackdropHandler}>
            <DeleteMessage
              deleteMessageData={deleteMessageData}
              setAllMessages={setAllMessages}
              setDeleteBackdropHandler={setDeleteBackdropHandler}
              deleteMessage={deleteMessage}
              setDeleteMessage={setDeleteMessage}
            />
          </BackdropOverlay>
        )}
      </div>
    </>
  );
};

export default Messages;
