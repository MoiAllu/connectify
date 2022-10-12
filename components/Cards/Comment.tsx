import moment from "moment";
import Image from "next/image";
import { useMemo, useState } from "react";
import CommentList from "./CommentList";
import Reply from "./Reply";

const Comment = (data: any) => {
  const { getReplies } = data;
  const [childReply, setChildReply] = useState(false);
  const childernComents = getReplies(data.comment.id);
  console.log(data.comment.id);
  console.log(childernComents);
  const [showreplies, setShowReplies] = useState(false);
  const childReplyHandler = (e: any) => {
    e.preventDefault();
    setChildReply(!childReply);
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
      {childernComents && showreplies && (
        <div className="flex-col rounded-md shadow-sm ml-16 gap-1  bg-gray-50">
          <CommentList {...{ rootComments: childernComents, getReplies }} />
        </div>
      )}
    </div>
  );
};
export default Comment;
