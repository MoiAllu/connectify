import React, { useEffect } from "react";
import ChatWindow from "../ChatWindow";
import Inbox from "../Inbox";
import getUserConversationHandler from "../../lib/Utilities/conversations/userConHandler";
import { useGetUserConversations } from "../../lib/hooks/useMe";

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

  allMessages:
    | {
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
      }
    | any;
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
    friendsrequests: any;
  };
};

const ChatLayout = (props: Props) => {
  const [showChatWindow, setShowChatWindow] = React.useState(false);
  const [chatWindowdata, setChatWindowData] = React.useState({});
  const [chatWindowLoading, setChatWindowLoading] = React.useState(false);
  // const [conversations, setConversations] = React.useState([]);
  const [mobileView, setMobileView] = React.useState(false);
  const {
    allConversations,
    conversations,
    setAllConversations: setConversations,
    isLoading,
    isError,
    countUnseenMessages,
  } = useGetUserConversations(props.user.id);
  // useEffect(() => {
  //   getUserConversationHandler({
  //     userId: props.user.id,
  //   }).then((res) => {
  //     if (!res.error) setConversations(res);
  //     else console.log(res);
  //   });
  // }, [props.user.id]);
  if (!conversations)
    return (
      <div className="flex  h-full w-full justify-center items-center">
        <svg
          aria-hidden="true"
          className="mr-2 w-5 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path> </path>
        </svg>
      </div>
    );
  if (window.innerWidth < 1024) {
    return (
      <>
        {mobileView ? (
          props.allMessages?.message && chatWindowdata ? (
            <ChatWindow
              {...props}
              showChatWindow={showChatWindow}
              setShowChatWindow={setChatWindowData}
              chatWindowData={chatWindowdata}
              allMessages={props.allMessages}
              setAllMessages={props.setAllMessages}
              setDeleteBackdropHandler={props.setDeleteBackdropHandler}
              setDeleteMessageData={props.setDeleteMessageData}
              setMobileView={setMobileView}
              setConversations={setConversations}
              conversations={conversations}
            />
          ) : (
            <div className="flex  h-full w-full justify-center items-center">
              <div
                className=" mt-5 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
          )
        ) : (
          <Inbox
            {...props}
            conversations={conversations}
            setConversations={setConversations}
            setShowChatWindow={setShowChatWindow}
            setChatWindowData={setChatWindowData}
            setAllMessages={props.setAllMessages}
            setMobileView={setMobileView}
            setChatWindowLoading={setChatWindowLoading}
          />
        )}
      </>
    );
  }
  return (
    <>
      <Inbox
        {...props}
        conversations={conversations}
        setConversations={setConversations}
        setShowChatWindow={setShowChatWindow}
        setChatWindowData={setChatWindowData}
        setAllMessages={props.setAllMessages}
        setMobileView={setMobileView}
        setChatWindowLoading={setChatWindowLoading}
      />
      {props.allMessages.message && chatWindowdata ? (
        <ChatWindow
          {...props}
          showChatWindow={showChatWindow}
          setShowChatWindow={setChatWindowData}
          chatWindowData={chatWindowdata}
          allMessages={props.allMessages}
          setAllMessages={props.setAllMessages}
          setDeleteBackdropHandler={props.setDeleteBackdropHandler}
          setDeleteMessageData={props.setDeleteMessageData}
          setMobileView={setMobileView}
          setConversations={setConversations}
          conversations={conversations}
        />
      ) : (
        <div className=" bg-white w-full hidden lg:flex flex-col h-[calc(100vh-100px)] p-4 my-4 rounded-2xl shadow-md">
          <div className="flex flex-col justify-center items-center h-full ">
            <h1 className="font-semibold text-xl">Conversation</h1>
            <p className="text-gray-500">Start a new conversation</p>
            {chatWindowLoading && (
              <div
                className=" mt-5 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatLayout;
