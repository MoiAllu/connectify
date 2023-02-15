import React from "react";
import ChatWindow from "../ChatWindow";
import Inbox from "../Inbox";

type Props = {};

const ChatLayout = (props: Props) => {
  return (
    <>
      <Inbox />
      <ChatWindow />
    </>
  );
};

export default ChatLayout;
