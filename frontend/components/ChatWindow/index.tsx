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
  setMobileView: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteMessageData: React.Dispatch<
    React.SetStateAction<{
      userId: number;
      messageId: number;
      conversationId: number;
    }>
  >;
  setAllMessages: React.Dispatch<React.SetStateAction<{}>>;
  setConversations: React.Dispatch<React.SetStateAction<[] | any>>;
  chatWindowData: {} | any;
  conversations: any;
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
    setMobileView,
  } = props;
  const [sendedMessage, setSendedMessage] = React.useState({});

  const [message, setMessage] = React.useState("");
  const [isMessageSending, setIsMessageSending] = React.useState(false);
  const isActive = true;
  const conversationId = "chat" + allMessages.id;

  // bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  // useEffect(() => {
  //   const messageHandler = async (data: any) => {
  //     await seenHandler({
  //       userId: user.id,
  //       conversationId: allMessages.id,
  //     });

  //     props.setConversations((prev: any) => {
  //       console.log("conversation", prev);
  //       prev.map((conversation: any) => {
  //         if (conversation.id === allMessages.id) {
  //           props.setAllMessages((prev: any) => {
  //             console.log("messages", prev);
  //             if (find(prev.message, { id: data.id })) return prev;
  //             else return { ...prev, message: [...prev.message, data] };
  //           });
  //         }
  //         return conversation;
  //       });
  //       return prev;
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
    setIsMessageSending(true);

    const response = await routeHandler({
      userId: user.id,
      currentUserId: user.id,
      conversationId: chatWindowData?.conversationId,
      message: e.target[0].value,
      image: "",
    });
    setMessage("");
    setIsMessageSending(false);
    console.log(response);
    setSendedMessage(response);
    if (response.error) return console.log(response.error);

    const messageHandler = async (data: any) => {
      await seenHandler({
        userId: user.id,
        conversationId: allMessages.id,
      });
      //   props.setConversations((prev: any) => {
      //     prev.map((conversation: any) => {
      //       if (conversation.id === allMessages.id) {
      //         props.setAllMessages((prev: any) => {
      //           if (find(prev.message, { id: data.id })) return prev;
      //           else return { ...prev, message: [...prev.message, data] };
      //         });
      //       }
      //       return conversation;
      //     });
      //     return prev;
      //   });
      // };
      props.setAllMessages((prev: any) => {
        console.log("allPreviousSingleConversation", prev);
        if (find(prev.message, { id: data.id })) return prev;
        else
          return (
            console.log("afterUpdate", {
              ...prev,
              message: [...prev.message, data],
            }),
            { ...prev, message: [...prev.message, data] }
          );
      });
    };
    const updateMessageHandler = (data: any) => {
      props.setAllMessages((prev: any) => {
        if (prev.message?.map((message: any) => message.id === data.id)) {
          const indexMsg = prev.message.findIndex(
            (message: any) => message.id === data.id
          );
          prev.message[indexMsg] = data;

          return prev;
        }
        return prev;
      });
    };

    pusherClient.subscribe(conversationId);
    console.log(
      "Pusher Triggered",
      pusherClient.subscribe(conversationId),
      pusherClient.bind("chat", messageHandler)
    );
    pusherClient.bind("chat", messageHandler);
    pusherClient.bind("seen", updateMessageHandler);
    return () => {
      pusherClient.unbind("chat", messageHandler);
      pusherClient.unbind("seen", updateMessageHandler);
      pusherClient.unsubscribe(conversationId);
    };
  };

  if (!props.showChatWindow) return null;
  return (
    <div className="bg-white w-full flex flex-col h-[calc(100vh-100px)] sm:p-4 p-2 my-4 rounded-2xl shadow-md">
      <div className="flex justify-between w-full p-2 pb-4 border-b-2">
        <div className="flex justify-between gap-3">
          <button
            className=" hover:bg-gray-200 p-2 rounded-lg"
            onClick={() => {
              setMobileView(false);
              props.setShowChatWindow(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="15 6 9 12 15 18" />
            </svg>
          </button>
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
        <div className="sm:block hidden">
          <Image
            className="rounded-full min-w-[28px] min-h-[28px] "
            src={"/square.jpg"}
            alt="Avatar Image"
            objectFit="fill"
            width={40}
            height={40}
          />
        </div>
        <input
          type="text"
          className="bg-gray-50 shadow-sm flex-1 p-1.5 rounded-lg outline-none"
          placeholder="Send a message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          disabled={isMessageSending}
          required
        />
        <button
          className="bg-sky-200 hover:bg-sky-300 p-1.5 rounded-lg"
          type="submit"
          disabled={isMessageSending}
        >
          {isMessageSending ? (
            <svg
              aria-hidden="true"
              className="mr-2 w-5 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          ) : (
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
          )}
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
