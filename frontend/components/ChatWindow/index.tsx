import moment from "moment";
import React, { useEffect } from "react";
import Image from "next/image";
import Message from "./Message";
import routeHandler from "../../lib/Utilities/messages/routeHandler";
import { pusherClient } from "../../lib/pusher";
import { find } from "lodash";
import seenHandler from "../../lib/Utilities/messages/seenHandler";

type Props = {
  setDeleteBackdropHandler: React.Dispatch<React.SetStateAction<boolean>>;
  showChatWindow: boolean;
  setShowChatWindow: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteMessageData: React.Dispatch<
    React.SetStateAction<{
      userId: number;
      messageId: number;
      conversationId: number;
    }>
  >;
  setAllMessages: React.Dispatch<React.SetStateAction<{}>>;
  chatWindowData: {};
  allMessages: {
    id: number;
    message: [
      {
        id: number;
        body: string;
        image: string;
        createdAt: string;
        updatedAt: string;
        senderId: number;
        conversationId: number;
        sender: {
          id: number;
          name: string;
          email: string;
          profilePicture: string;
          createdAt: string;
          updatedAt: string;
        };
      }
    ];
  };
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
  const {
    chatWindowData,
    user,
    allMessages,
    setDeleteBackdropHandler,
    setDeleteMessageData,
  } = props;
  const [sendedMessage, setSendedMessage] = React.useState({});
  const isActive = true;
  const conversationId = "chat" + allMessages.id;
  // bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  // useEffect(() => {
  //   const messageHandler = async (data: any) => {
  //     await seenHandler({
  //       userId: user.id,
  //       conversationId: allMessages.id,
  //     });

  //     props.setAllMessages((prev: any) => {
  //       console.log("before send Array", prev);
  //       console.log("message", data);
  //       if (find(prev.message, { id: data.id })) return prev;
  //       else return { ...prev, message: [...prev.message, data] };
  //     });
  //   };
  //   // bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  //   const updateMessageHandler = (data: any) => {
  //     console.log("update message", data);
  //     props.setAllMessages((prev: any) => {
  //       if (prev.message.map((message: any) => message.id === data.id)) {
  //         const indexMsg = prev.message.findIndex(
  //           (message: any) => message.id === data.id
  //         );
  //         prev.message[indexMsg] = data;
  //         console.log("updated", prev);
  //         return prev;
  //       }
  //       return prev;
  //     });
  //   };

  //   pusherClient.subscribe(conversationId);
  //   pusherClient.bind("chat", messageHandler);
  //   pusherClient.bind("seen", updateMessageHandler);
  //   return () => {
  //     pusherClient.unbind("chat", messageHandler);
  //     pusherClient.bind("seen", updateMessageHandler);
  //     pusherClient.unsubscribe(conversationId);
  //   };
  // }, [sendedMessage]);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const response = await routeHandler({
      userId: user.id,
      friendId: chatWindowData?.friendId,
      currentUserId: user.id,
      conversationId: chatWindowData?.conversationId,
      message: e.target[0].value,
    });
    console.log(response);
    setSendedMessage(response);
    if (response.error) return console.log(response.error);
    const messageHandler = async (data: any) => {
      const updatedMessage = await seenHandler({
        userId: user.id,
        conversationId: allMessages.id,
      });
      console.log("new message", updatedMessage);

      props.setAllMessages((prev: any) => {
        if (find(prev.message, { id: data.id })) return prev;
        else return { ...prev, message: [...prev.message, data] };
      });
    };
    // bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    const updateMessageHandler = (data: any) => {
      console.log("update__message", data);
      props.setAllMessages((prev: any) => {
        if (prev.message.map((message: any) => message.id === data.id)) {
          const indexMsg = prev.message.findIndex(
            (message: any) => message.id === data.id
          );
          prev.message[indexMsg] = data;
          console.log("updated", prev);
          return prev;
        }
        return prev;
      });
    };

    pusherClient.subscribe(conversationId);
    pusherClient.bind("chat", messageHandler);
    pusherClient.bind("seen", updateMessageHandler);
    return () => {
      pusherClient.unbind("chat", messageHandler);
      pusherClient.bind("seen", updateMessageHandler);
      pusherClient.unsubscribe(conversationId);
    };
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
      {allMessages.message && (
        <div className="flex-1 overflow-auto scrollbar-light my-2 flex flex-col gap-3 h-full w-full">
          {allMessages.message.map((mess: any, i: any) => (
            <Message
              key={mess.id}
              message={mess.body}
              createdAt={mess.createdAt}
              isSender={mess.senderId === user.id}
              image={mess.image}
              profilePicture={mess.sender?.profilePicture}
              lastMessage={allMessages.message[allMessages.message.length - 1]}
              Id={mess.id}
              userId={user.id}
              conversationId={allMessages.id}
              setDeleteBackdropHandler={setDeleteBackdropHandler}
              setDeleteMessageData={setDeleteMessageData}
            />
          ))}
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
