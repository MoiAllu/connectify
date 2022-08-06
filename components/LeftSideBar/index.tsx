import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const LeftSideBar = (props: Props) => {
  const router = useRouter();
  const { pathname } = router;
  const isFeed = pathname === "/";
  const isMessages = pathname === "/messages";
  const isNotifications = pathname === "/notifications";
  const isProfile = pathname === "/profile";
  const isSettings = pathname === "/settings";

  const logoutHandler = () => {
    // TODO update auth=null from global state
    router.push("/signin");
  };

  return (
    <div className="hidden lg:flex flex-col items-center fixed bottom-0 w-[18vw] min-h-[calc(100vh-70px)] bg-white gap-3 pt-4">
      {/* Element */}
      <Link href={"/"}>
        <div
          className={`flex  items-center w-[95%] xl:w-[80%] h-32px ${
            isFeed
              ? "bg-blue-grey text-white stroke-white"
              : "bg-white text-black stroke-black"
          } font-semibold rounded-lg p-2    gap-3 cursor-pointer hover:shadow-sm hover:bg-gray-300 transition-all`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="16" y2="18" />
          </svg>
          <p className="xl:text-md text-sm">Feed</p>
        </div>
      </Link>

      {/* Element */}
      <Link href={"/messages"}>
        <div
          className={`flex  items-center w-[95%] xl:w-[80%] h-32px ${
            isMessages
              ? "bg-blue-grey text-white stroke-white"
              : "bg-white text-black stroke-black"
          } font-semibold rounded-lg p-2    gap-3 cursor-pointer hover:shadow-sm hover:bg-gray-300 transition-all`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
            <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
          </svg>
          <p className="xl:text-md text-sm flex-1">Messages</p>
          <p className="text-xs bg-red-500 px-2 py-1 rounded-lg text-white">
            99+
          </p>
        </div>
      </Link>

      {/* Element */}
      <Link href={"/notifications"}>
        <div
          className={`flex items-center w-[95%] xl:w-[80%] h-32px ${
            isNotifications
              ? "bg-blue-grey text-white stroke-white"
              : "bg-white text-black stroke-black"
          } font-semibold rounded-lg p-2    gap-3 cursor-pointer hover:shadow-sm hover:bg-gray-300 transition-all`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="min-w-[28px] min-h-[28px]"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 6h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
            <circle cx="17" cy="7" r="3" />
          </svg>
          <p className="xl:text-md text-sm flex-1">Notification</p>
          <p className="text-xs bg-red-500 px-2 py-1 rounded-lg text-white">
            99+
          </p>
        </div>
      </Link>

      {/* Element */}
      <Link href={"/profile"}>
        <div
          className={`flex  items-center w-[95%] xl:w-[80%] h-32px ${
            isProfile
              ? "bg-blue-grey text-white stroke-white"
              : "bg-white text-black stroke-black"
          } font-semibold rounded-lg p-2    gap-3 cursor-pointer hover:shadow-sm hover:bg-gray-300 transition-all`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="7" r="4" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
          <p className="xl:text-md text-sm">Profile</p>
        </div>
      </Link>

      {/* Element */}
      <Link href={"/settings"}>
        <div
          className={`flex  items-center w-[95%] xl:w-[80%] h-32px ${
            isSettings
              ? "bg-blue-grey text-white stroke-white"
              : "bg-white text-black stroke-black"
          } font-semibold rounded-lg p-2    gap-3 cursor-pointer hover:shadow-sm hover:bg-gray-300 transition-all`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <p className="xl:text-md text-sm">Settings</p>
        </div>
      </Link>

      {/* Element */}
      <button
        className={`flex hover:shadow-sm hover:bg-orange-200 transition-all  items-center w-[95%] xl:w-[80%] h-32px bg-white text-black stroke-black font-semibold rounded-lg p-2 pl-3 gap-3 cursor-pointer `}
        onClick={logoutHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
          <path d="M7 12h14l-3 -3m0 6l3 -3" />
        </svg>
        <p className="xl:text-md text-sm">Logout</p>
      </button>
    </div>
  );
};

export default LeftSideBar;
