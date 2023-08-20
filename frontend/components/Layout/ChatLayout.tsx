import React from "react";
import ChatWindow from "../ChatWindow";
import Inbox from "../Inbox";

type Props = {
  user: {
    id: number;
    name: string;
    email: string;
    profilePicture: string;
    createdAt: string;
    updatedAt: string;
    friends: [
      {
        id: number;
        name: string;
        email: string;
        profilePicture: string;
        createdAt: string;
        updatedAt: string;
      }
    ];
  };
};

const ChatLayout = (props: Props) => {
  const [showChatWindow, setShowChatWindow] = React.useState(false);
  const [chatWindowdata, setChatWindowData] = React.useState({});
  const [allMessages, setAllMessages] = React.useState({});
  return (
    <>
      <Inbox
        {...props}
        setShowChatWindow={setShowChatWindow}
        setChatWindowData={setChatWindowData}
        setAllMessages={setAllMessages}
      />
      <ChatWindow
        {...props}
        showChatWindow={showChatWindow}
        setShowChatWindow={setChatWindowData}
        chatWindowData={chatWindowdata}
        allMessages={allMessages}
      />
    </>
  );
};

export default ChatLayout;
