import React from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { NotificationCategory, NotificationType } from "../../interfaces";

type Props = {
  notification: NotificationType;
};

const Notification: React.FC<Props> = ({ notification }) => {
  const getIcon = () => {
    switch (notification.category) {
      case NotificationCategory.Like:
        return (
          <div className="w-[24px] h-[24px] rounded-full bg-red-200 flex items-center justify-center fill-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="inherit"
              fill="inherit"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
          </div>
        );
        break;
      case NotificationCategory.Comment:
        return (
          <div className="w-[24px] h-[24px] rounded-full bg-emerald-200 flex items-center justify-center fill-emerald-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="inherit"
              fill="inherit"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
              <line x1="8" y1="9" x2="16" y2="9" />
              <line x1="8" y1="13" x2="14" y2="13" />
            </svg>
          </div>
        );
        break;

      case NotificationCategory.Follow:
        return (
          <div className="w-[24px] h-[24px] rounded-full bg-blue-200 flex items-center justify-center fill-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="inherit"
              fill="inherit"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="7" r="4" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </div>
        );
        break;

      case NotificationCategory.Share:
        return (
          <div className="w-[24px] h-[24px] rounded-full bg-orange-200 flex items-center justify-center fill-transparent stroke-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="inherit"
              fill="inherit"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 13l4 -4l-4 -4m4 4h-11a4 4 0 0 0 0 8h1" />
            </svg>
          </div>
        );
        break;

      default:
        return (
          <div className="w-[24px] h-[24px] rounded-full bg-purple-200 flex items-center justify-center fill-purple-500 stroke-purple-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="inherit"
              fill="inherit"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16" />
            </svg>
          </div>
        );
        break;
    }
  };

  const getRightContent = () => {
    if (notification.category === NotificationCategory.Follow) {
      //   TODO: Check if the user has followed back or not and display the respective button

      if (notification.followedBack) {
        return (
          <button className="max-w-[140px] flex-1 py-1.5 border text-gray-500 rounded-lg hover:shadow-md">
            Followed
          </button>
        );
      } else {
        return (
          <button className="max-w-[140px]  flex-1 py-1.5 text-white bg-blue-500 rounded-lg hover:shadow-lg">
            Follow Back
          </button>
        );
      }
    }
    if (!notification.markedRead)
      return <div className="w-2 h-2 bg-red-500 rounded-full"></div>;
  };

  return (
    <Link href="#">
      <div className="border-b p-2 hover:bg-gray-50 transition-all cursor-pointer">
        <div className="flex justify-between items-center gap-3">
          {getIcon()}

          <Image
            className="rounded-full"
            src={"/square.jpg"}
            alt="Avatar Image"
            objectFit="fill"
            width={40}
            height={40}
          />
          <div
            className={`flex flex-col flex-1 ${
              notification.markedRead ? "text-gray-400" : "text-gray-800"
            }`}
          >
            <div className={`flex gap-1`}>
              <Link href="/profile">
                <span className="font-semibold hover:underline cursor-pointer">
                  Josephine
                </span>
              </Link>
              <span className="font-normal">
                {notification.text} {notification.category}
              </span>
            </div>
            <p className="text-sm">{moment.unix(1659671590).fromNow()}</p>
          </div>
          {/* Right Content */}
          {getRightContent()}
        </div>
      </div>
    </Link>
  );
};

export default Notification;
