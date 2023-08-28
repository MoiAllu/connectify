import React from "react";
import Image from "next/image";
import moment from "moment";
import routeHandler from "../../lib/Utilities/conversations/routeHandler";
import getHandler from "../../lib/Utilities/messages/getHandler";

type Props = {
  setShowChatWindow: React.Dispatch<React.SetStateAction<boolean>>;
  setChatWindowData: React.Dispatch<React.SetStateAction<{}>>;
  setAllMessages: React.Dispatch<React.SetStateAction<{}>>;
  conversations: any;
  userId: number;
  friendId: number;
  friendName: string;
  user: any;
};

const PersonChat = (props: Props) => {
  const {
    user,
    userId,
    friendId,
    friendName,
    setShowChatWindow,
    setChatWindowData,
    setAllMessages,
    conversations,
  } = props;

  const messages = conversations.filter(
    (conversation: any) => conversation.userId === friendId
  );
  const lastMessage = messages[0]?.message[messages[0]?.message.length - 1];
  const date = parseInt(
    (new Date(lastMessage?.createdAt).getTime() / 1000).toFixed(0)
  );
  const onClickHandler = async (e: any) => {
    e.preventDefault();
    const response = await routeHandler({
      currentUserId: userId,
      members: [userId, friendId],
      isGroup: false,
      userId: friendId,
      name: friendName,
    });

    // console.log(response);
    setChatWindowData({
      userId,
      friendId,
      conversationId: response.id,
      friendName: friendName,
    });
    const messages = await getHandler({
      user,
      userId,
      conversationId: response.id,
    });
    console.log(messages);
    setAllMessages(messages);
    setShowChatWindow(true);
  };
  return (
    <div
      className="flex justify-between items-center w-full p-2 pb-4 border-b min-w-[272px] hover:bg-gray-100 transition-all"
      onClick={onClickHandler}
    >
      <div className="flex justify-between items-center gap-3">
        <div className="w-[40px] h-[40px]">
          <Image
            className="rounded-full"
            src={"/square.jpg"}
            alt="Avatar Image"
            objectFit="contain"
            width={40}
            height={40}
          />
        </div>
        <div className="flex flex-col flex-1">
          <p className="font-semibold truncate max-w-[150px]">{friendName}</p>
          <p
            className={`text-xs truncate max-w-[150px] ${
              lastMessage?.senderId !== userId &&
              lastMessage?.seenId !== userId &&
              "font-semibold"
            }`}
          >
            {lastMessage?.body}
          </p>
        </div>
      </div>

      <div className=" flex flex-col items-end text-sm pt-1 min-w-[57px]">
        {moment
          .unix(
            parseInt(
              (new Date(lastMessage?.createdAt).getTime() / 1000).toFixed(0)
            )
          )
          .format("hh:mm a")}
        {lastMessage?.senderId !== userId && lastMessage?.seenId !== userId && (
          <div className="bg-red-400 text-white text-center px-1">
            <span>1</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonChat;
