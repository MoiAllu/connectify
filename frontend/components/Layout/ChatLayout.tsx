import React, { useEffect } from "react";
import ChatWindow from "../ChatWindow";
import Inbox from "../Inbox";
import getUserConversationHandler from "../../lib/Utilities/conversations/userConHandler";

type Props = {
  setDeleteBackdropHandler: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteMessageData: React.Dispatch<
    React.SetStateAction<{
      userId: number;
      messageId: number;
      conversationId: number;
    }>
  >;
  setAllMessages: React.Dispatch<React.SetStateAction<{}>>;
  allMessages: {};
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
  const [conversations, setConversations] = React.useState([]);

  useEffect(() => {
    getUserConversationHandler({
      userId: props.user.id,
    }).then((res) => {
      if (!res.error) setConversations(res);
      else console.log(res);
    });
  }, [props.user.id]);
  return (
    <>
      <Inbox
        {...props}
        conversations={conversations}
        setShowChatWindow={setShowChatWindow}
        setChatWindowData={setChatWindowData}
        setAllMessages={props.setAllMessages}
      />
      <ChatWindow
        {...props}
        showChatWindow={showChatWindow}
        setShowChatWindow={setChatWindowData}
        chatWindowData={chatWindowdata}
        allMessages={props.allMessages}
        setDeleteBackdropHandler={props.setDeleteBackdropHandler}
        setDeleteMessageData={props.setDeleteMessageData}
      />
    </>
  );
};

export default ChatLayout;
