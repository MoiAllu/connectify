import React from "react";
import PersonChat from "./PersonChat";

type Props = {
  setShowChatWindow: React.Dispatch<React.SetStateAction<boolean>>;
  setChatWindowData: React.Dispatch<React.SetStateAction<{}>>;
  setAllMessages: React.Dispatch<React.SetStateAction<{}>>;

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
  const { user, setShowChatWindow, setChatWindowData, setAllMessages } = props;
  return (
    <div className="flex flex-col w-full gap-2">
      {user.friends.map((friend: any) => (
        <PersonChat
          setShowChatWindow={setShowChatWindow}
          setChatWindowData={setChatWindowData}
          setAllMessages={setAllMessages}
          userId={user.id}
          user={user}
          key={friend.id}
          friendId={friend.id}
          friendName={friend.name}
        />
      ))}
    </div>
  );
};

export default Chats;
