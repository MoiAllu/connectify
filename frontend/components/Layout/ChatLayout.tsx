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
  };
};

const ChatLayout = (props: Props) => {
  const [showChatWindow, setShowChatWindow] = React.useState(false);
  const [chatWindowdata, setChatWindowData] = React.useState({});
  const [conversations, setConversations] = React.useState([]);
  const [mobileView, setMobileView] = React.useState(false);
  useEffect(() => {
    getUserConversationHandler({
      userId: props.user.id,
    }).then((res) => {
      if (!res.error) setConversations(res);
      else console.log(res);
    });
  }, [props.user.id]);
  if (window.innerWidth < 1024) {
    return (
      <>
        {mobileView ? (
          props.allMessages.message && chatWindowdata ? (
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
            />
          ) : (
            <div className="flex  h-full w-full justify-center items-center">
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
        />
      ) : (
        <div className=" bg-white w-full hidden lg:flex flex-col h-[calc(100vh-100px)] p-4 my-4 rounded-2xl shadow-md">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="font-semibold text-xl">Conversation</h1>
            <p className="text-gray-500">Start a new conversation</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatLayout;
