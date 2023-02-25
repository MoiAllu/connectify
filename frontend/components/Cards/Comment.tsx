import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMe } from "../../lib/hooks/useMe";
import deleteComment from "../../lib/Utilities/comments/deleteComment";
import likeComment from "../../lib/Utilities/likeComment";
import CommentList from "./CommentList";
import Reply from "./Reply";

const Comment = (data: any) => {
  const { user } = useMe();
  const { getReplies, localComments, deleteLocalComment } = data;
  const [commentsLikeByMe, setCommentsLikeByMe] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState();
  const [childReply, setChildReply] = useState(false);
  const childernComents = getReplies(data.comment.id);
  const [showreplies, setShowReplies] = useState(false);
  const childReplyHandler = (e: any) => {
    e.preventDefault();
    setChildReply(!childReply);
    setShowReplies(true);
  };
  useEffect(() => {
    if (data.comment?.user?.id === user?.id) {
      setShowDeleteButton(user.id);
    }
    data.comment?.likes?.filter((comment: any) => {
      if (comment.userId === user.id) {
        return setCommentsLikeByMe(true);
      }
      return setCommentsLikeByMe(false);
    });
  }, [data?.comment]);
  const likeCommentHandler = async (e: any) => {
    e.preventDefault();
    const res = await likeComment({
      commentId: data.comment.id,
      postId: data.comment.postId,
      userId: user.id,
    });
    if (res.addLike === true) {
      setCommentsLikeByMe(true);
    } else {
      setCommentsLikeByMe(false);
    }
  };
  const commentDeleteHandler = async (e: any) => {
    e.preventDefault();
    const res = await deleteComment({ commentId: data.comment.id });
    deleteLocalComment(res?.deletedComment.id);
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
            src={data?.comment?.user?.profilePicture || "/square.jpg"}
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
              <button
                type="button"
                onClick={likeCommentHandler}
                className={`hover:underline ${
                  commentsLikeByMe && "text-bold text-blue-600"
                } text-gray-500`}
              >
                like
              </button>

              <button
                type="button"
                onClick={childReplyHandler}
                className="hover:underline text-gray-500 "
              >
                reply
              </button>
              {showDeleteButton && (
                <button
                  type="button"
                  onClick={commentDeleteHandler}
                  className="hover:underline text-gray-500 "
                >
                  delete
                </button>
              )}
            </div>
            {childernComents && (
              <div className="p-2 text-sm">
                {!showreplies && (
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
                )}
              </div>
            )}
          </div>
          {childReply && <Reply {...{ data, localComments }} />}
        </div>
      </div>
      {childernComents && showreplies && (
        <div className="flex  ml-10 gap-1  bg-white">
          <button
            type="button"
            onClick={repliesShowHandler}
            className="border-l-2 border-gray-300"
          ></button>
          <div className="flex-1 ">
            <CommentList
              {...{
                rootComments: childernComents,
                getReplies,
                localComments,
                deleteLocalComment,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Comment;
