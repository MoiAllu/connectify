import React from "react";
import PersonChat from "./PersonChat";

type Props = {
  setShowChatWindow: React.Dispatch<React.SetStateAction<boolean>>;
  setChatWindowData: React.Dispatch<React.SetStateAction<{}>>;
  setAllMessages: React.Dispatch<React.SetStateAction<{}>>;
  setConversations: React.Dispatch<React.SetStateAction<[]>>;
  conversations: any;
  user: {
    id: number;
    name: string;
    email: string;
    profilePicture: string;
    createdAt: string;
    updatedAt: string;
    friends: any;
  };
};

const Chats = (props: Props) => {
  const {
    user,
    setShowChatWindow,
    setChatWindowData,
    setAllMessages,
    setConversations,
    conversations,
  } = props;
  const [selected, setSelected] = React.useState(null || Number);

  return (
    <div className="flex flex-col w-full gap-2">
      {user.friends.map((friend: any, i: any) => (
        <PersonChat
          setShowChatWindow={setShowChatWindow}
          setChatWindowData={setChatWindowData}
          setAllMessages={setAllMessages}
          setConversations={setConversations}
          userId={user.id}
          user={user}
          key={friend.user.id}
          friendId={friend.user.id}
          friendName={friend.user.name}
          conversations={conversations}
          Id={friend.user.id}
          setSelected={setSelected}
          selected={selected}
        />
      ))}
    </div>
  );
};

export default Chats;
