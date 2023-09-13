import React, { useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import deleteMessageHandler from "../../lib/Utilities/messages/deleteMessageHandler";
type Props = {
  setDeleteBackdropHandler: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteMessageData: React.Dispatch<
    React.SetStateAction<{
      userId: number;
      messageId: number;
      conversationId: number;
    }>
  >;

  message: string;
  createdAt: any;
  isSender: boolean;
  profilePicture: string;
  image: string;
  lastMessage: any;
  Id: any;
  userId: number;
  conversationId: number;
};

const Message: React.FC<Props> = (props: Props) => {
  const {
    message,
    createdAt,
    isSender,
    profilePicture,
    image,
    lastMessage,
    conversationId,
    Id,
    userId,
    setDeleteBackdropHandler,
    setDeleteMessageData,
  } = props;

  const [optionHandler, setOptionHandler] = React.useState(false);
  const bottomRef = React.useRef<HTMLDivElement>(null);
  const person = isSender ? "sender" : "receiver";
  const seenBy = lastMessage.users.filter((user: any) => user.id !== userId);
  const messageDeleteHandler = async (e: any) => {
    e.preventDefault();
    console.log(Id, userId, conversationId);
    setDeleteBackdropHandler(true);
    setOptionHandler(false);
    setDeleteMessageData({
      userId: userId,
      messageId: Id,
      conversationId: conversationId,
    });
  };
  useEffect(() => {
    if (lastMessage.id === Id) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    setOptionHandler(false);
  }, []);

  return (
    <div
      className={`flex flex-col ${
        person === "sender" ? "items-end" : "items-start"
      }`}
      ref={lastMessage.id === props.Id ? bottomRef : null}
    >
      <div
        className={`flex ${
          person === "sender" ? "flex-row-reverse" : "flex-row"
        } gap-2 max-w-[80%] justify-center items-center`}
      >
        {/* Image */}
        <div className="flex flex-col-reverse">
          <Image
            className="rounded-full min-w-[28px] min-h-[28px]"
            src={"/square.jpg"}
            alt="Avatar Image"
            objectFit="contain"
            width={30}
            height={30}
          />
        </div>
        {/* Message */}
        <div
          className={`${
            person === "sender" ? "bg-gray-100" : "bg-blue-400"
          } p-3 rounded-2xl`}
        >
          {message && <p className="text-sm">{message}</p>}
        </div>
        {/* 3 Dots */}
        <div
          className="flex items-center"
          onClick={() => setOptionHandler(!optionHandler)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-gray-500 cursor-pointer"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="5" cy="12" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
          </svg>
        </div>
        {optionHandler && (
          <div id="dropdown" className=" bg-gray-50 rounded-md ransition-all">
            <ul
              className=" text-sm text-gray-700 "
              aria-labelledby="dropdownDefaultButton"
            >
              {person === "sender" && (
                <li onClick={messageDeleteHandler}>
                  <a
                    href="#"
                    className="block px-2 py-1 hover:bg-gray-100 text-red-600"
                  >
                    delete
                  </a>
                </li>
              )}
              <li>
                <a
                  href="#"
                  className="block px-2 py-1 hover:bg-gray-100 text-blue-700"
                >
                  starred
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className={`mx-8`}>
        {lastMessage.id === props.Id && (
          <div className="flex justify-center items-center text-xs gap-1">
            {lastMessage.senderId === userId && seenBy[0] && <p>seen</p>}
            <p>
              {moment
                .unix(
                  parseInt(
                    (new Date(lastMessage.createdAt).getTime() / 1000).toFixed(
                      0
                    )
                  )
                )
                .fromNow()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
