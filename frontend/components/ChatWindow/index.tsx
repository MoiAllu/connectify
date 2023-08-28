import moment from "moment";
import React, { useEffect } from "react";
import Image from "next/image";
import Message from "./Message";
import routeHandler from "../../lib/Utilities/messages/routeHandler";
import { pusherClient } from "../../lib/pusher";
import { compact, find } from "lodash";
type Props = {
  showChatWindow: boolean;
  setShowChatWindow: React.Dispatch<React.SetStateAction<boolean>>;
  chatWindowData: {};
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

const ChatWindow = (props: Props) => {
  const { chatWindowData, user, allMessages: converasation } = props;
  const [allMessages, setAllMessages] = React.useState(converasation.message);
  const [sendedMessage, setSendedMessage] = React.useState({});
  const bottomRef = React.useRef<HTMLDivElement>(null);
  const isActive = true;
  const conversationId = "chat" + converasation.id;
  bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => {
    setAllMessages(converasation?.message);
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    const messageHandler = (data: any) => {
      setAllMessages((prev: any) => {
        console.log(prev);
        console.log(data);
        if (find(prev, { id: data.id })) return prev;
        else return [...prev, data];
      });
    };
    console.log(allMessages);
    console.log(conversationId);
    pusherClient.subscribe(conversationId);
    pusherClient.bind("chat", messageHandler);
    return () => {
      pusherClient.unsubscribe(conversationId);
      pusherClient.unbind("chat", messageHandler);
    };
  }, [converasation, sendedMessage.id]);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const response = await routeHandler({
      userId: user.id,
      friendId: chatWindowData?.friendId,
      conversationId: chatWindowData?.conversationId,
      message: e.target[0].value,
    });
    console.log(response);
    setSendedMessage(response);
  };

  if (!props.showChatWindow) return null;
  return (
    <div className="bg-white w-full hidden lg:flex flex-col h-[calc(100vh-100px)] p-4 my-4 rounded-2xl shadow-md">
      <div className="flex justify-between w-full p-2 pb-4 border-b-2">
        <div className="flex justify-between gap-3">
          <Image
            className="rounded-full"
            src={"/square.jpg"}
            alt="Avatar Image"
            objectFit="fill"
            width={40}
            height={40}
          />
          <div className="flex flex-col flex-1">
            <p className="font-semibold">{chatWindowData?.friendName}</p>
            {isActive ? (
              <div className="flex items-center gap-3">
                <p className="text-sm text-gray-400">Active now</p>
                <div className="w-2 h-2 relative top-0.5 bg-green-600 rounded-full"></div>
              </div>
            ) : (
              <p className="text-sm">{moment.unix(1588888888).fromNow()}</p>
            )}
          </div>
        </div>
      </div>

      {/* Chat */}
      {allMessages && (
        <div className="flex-1 overflow-auto scrollbar-light my-2 flex flex-col gap-3 h-full w-full">
          {allMessages.map((mess: any, i: any) => (
            <Message
              key={mess.id}
              message={mess.body}
              createdAt={mess.createdAt}
              isSender={mess.senderId === user.id}
              image={mess.image}
              profilePicture={mess.sender.profilePicture}
              lastMessage={allMessages[allMessages.length - 1]}
              Id={mess.id}
            />
          ))}
          <div ref={bottomRef} className="p-2 h-full w-full flex"></div>
        </div>
      )}

      {/* Message */}
      <form
        className="flex justify-between items-center gap-4"
        onSubmit={submitHandler}
      >
        <Image
          className="rounded-full min-w-[28px] min-h-[28px]"
          src={"/square.jpg"}
          alt="Avatar Image"
          objectFit="fill"
          width={40}
          height={40}
        />
        <input
          type="text"
          className="bg-gray-50 shadow-sm flex-1 p-1.5 rounded-lg outline-none"
          placeholder="Send a message"
        />
        <button
          className="bg-sky-200 hover:bg-sky-300 p-1.5 rounded-lg"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="10" y1="14" x2="21" y2="3" />
            <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
