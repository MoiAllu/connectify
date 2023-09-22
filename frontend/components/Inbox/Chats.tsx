import React from "react";
import PersonChat from "./PersonChat";

type Props = {
  setShowChatWindow: React.Dispatch<React.SetStateAction<boolean>>;
  setChatWindowData: React.Dispatch<React.SetStateAction<{}>>;
  setAllMessages: React.Dispatch<React.SetStateAction<{}>>;
  setConversations: React.Dispatch<React.SetStateAction<[]>>;
  setMobileView: React.Dispatch<React.SetStateAction<boolean>>;
  setChatWindowLoading: React.Dispatch<React.SetStateAction<boolean>>;
  conversations: any;
  user: {
    id: number;
    name: string;
    email: string;
    profilePicture: string;
    createdAt: string;
    updatedAt: string;
    friends: any;
    friendsrequests: any;
  };
};

const Chats = (props: Props) => {
  const {
    user,
    setShowChatWindow,
    setChatWindowData,
    setAllMessages,
    setConversations,
    setChatWindowLoading,
    conversations,
    setMobileView,
  } = props;
  const [selected, setSelected] = React.useState(null || Number);
  const friends = user.friends.filter((friend: any) => {
    return user.friendsrequests.some(
      (friendrequest: any) =>
        friendrequest.friendId === friend.user.id &&
        friendrequest.userId === user.id
    );
  });
  // user.friendsrequests.map((friend: any) => console.log(friend.friendId));
  return (
    <div className="flex flex-col w-full gap-2">
      {friends.map((friend: any, i: any) => (
        <PersonChat
          setChatWindowLoading={setChatWindowLoading}
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
          setMobileView={setMobileView}
        />
      ))}
    </div>
  );
};

export default Chats;
