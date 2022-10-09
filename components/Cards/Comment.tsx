import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import Reply from "./Reply";

const Comment = (data: any) => {
  //   const nestedComment = data.data.getReplies(data.data.id);
  // console.log(data);

  const [nestedChilDReply, setNestedChildReply] = useState(false);
  const [childReply, setChildReply] = useState(false);
  const childernComents = data.childComments.getReplies(data.comment.id);
  // console.log(childernComents.length);
  const [showreplies, setShowReplies] = useState(false);
  const childReplyHandler = (e: any) => {
    e.preventDefault();
    setChildReply(!childReply);
  };
  const nestedChilDReplyHanlder = (e: any) => {
    e.preventDefault();
    setNestedChildReply(!nestedChilDReply);
  };
  const repliesShowHandler = (e: any) => {
    e.preventDefault();
    setShowReplies(!!!showreplies);
  };
  return (
    <div className={`p-2 mb-1}`}>
      <div className="flex rounded-lg px-[10px] gap-2 py-2">
        <div>
          <Image
            className="rounded-full min-w-[28px] min-h-[28px]"
            src={"/square.jpg"}
            alt="Avatar Image"
            objectFit="fill"
            width={40}
            height={40}
          />
        </div>
        <div className=" flex-1 flex-col">
          <div className="flex justify-between">
            <p className="font-semibold">{data.comment.user?.name}</p>
            <p className="text-[12px] text-gray-500">
              {moment
                .unix(
                  Math.floor(new Date(data.comment.createdAt).getTime() / 1000)
                )
                .fromNow()}
            </p>
          </div>
          <div>
            <article>{data.comment.message}</article>
          </div>
          <div className="flex justify-between">
            <div
              className={`flex gap-8 px-[20px] text-sm ${
                childReply && "flex gap-8 px-[20px] m-2 text-sm"
              } mt-2`}
            >
              <button type="button" className="hover:underline text-gray-500 ">
                like
              </button>
              <button
                type="button"
                onClick={childReplyHandler}
                className="hover:underline text-gray-500 "
              >
                reply
              </button>
            </div>
            {childernComents && (
              <div className="p-2 text-sm">
                <button
                  type="button"
                  onClick={repliesShowHandler}
                  className="hover:underline text-gray-500 "
                >
                  {childernComents?.length > 1 ? (
                    <p>{childernComents?.length} replies</p>
                  ) : (
                    <p>{childernComents?.length} reply</p>
                  )}{" "}
                </button>
              </div>
            )}
          </div>
          {childReply && <Reply {...data.comment} />}
        </div>
      </div>
      {childernComents &&
        showreplies &&
        childernComents.map((child: any) => (
          <div
            key={child.id}
            className="flex rounded-lg shadow-sm px-[20px] gap-1 py-2 m-[5px] bg-gray-50"
          >
            <div>
              <Image
                className="rounded-full min-w-[28px] min-h-[28px]"
                src={"/square.jpg"}
                alt="Avatar Image"
                objectFit="fill"
                width={35}
                height={35}
              />
            </div>
            <div className=" flex-1 flex-col text-sm">
              <div className="flex justify-between">
                <p className="font-semibold">{child.user?.name}</p>
                <p className="text-[12px] text-gray-500">
                  {moment
                    .unix(
                      Math.floor(new Date(child.createdAt).getTime() / 1000)
                    )
                    .fromNow()}
                </p>
              </div>
              <div>
                <article>{child.message}</article>
              </div>
              <div
                className={`flex gap-8 px-[20px] ${
                  childReply && "flex gap-8 px-[20px] m-2"
                } mt-2`}
              >
                <button className="hover:underline text-gray-500 ">like</button>
                <button
                  type="button"
                  onClick={nestedChilDReplyHanlder}
                  className="hover:underline text-gray-500 "
                >
                  reply
                </button>
              </div>
              <div className="m-2">
                {nestedChilDReply && <Reply {...child} />}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Comment;
