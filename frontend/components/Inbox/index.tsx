import React from "react";
import Chats from "./Chats";
import PersonChat from "./PersonChat";

type Props = {
  setShowChatWindow: React.Dispatch<React.SetStateAction<boolean>>;
  setChatWindowData: React.Dispatch<React.SetStateAction<{}>>;
  setAllMessages: React.Dispatch<React.SetStateAction<{}>>;
  setConversations: React.Dispatch<React.SetStateAction<[] | any>>;
  setMobileView: React.Dispatch<React.SetStateAction<boolean>>;
  conversations: any;
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

const Inbox: React.FC<Props> = (props: Props) => {
  return (
    <div className="flex flex-col items-center w-full lg:w-[40%] h-[calc(100vh-100px)] bg-white shadow-lg gap-3 py-6 px-4 overflow-auto scrollbar-light my-4 rounded-2xl min-w-[300px]">
      {/* Search */}
      <div className="flex items-center px-1 py-1 rounded-lg max-h-[35px] text-[14px] border border-gray-300 focus:shadow-sm w-full">
        <svg
          className=" fill-gray-500 p-1  min-w-[30px] min-h-[30px]  "
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
        </svg>
        <input
          className="flex-1 p-1 rounded-lg max-h-[35px] text-[14px]  outline-none focus:outline-none w-full "
          id="searchbox"
          placeholder="Search friends!"
          type="search"
        ></input>
        <label htmlFor="searchbox"></label>
      </div>

      <Chats {...props} />
    </div>
  );
};

export default Inbox;
