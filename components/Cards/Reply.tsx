import Image from "next/image";
import { useState } from "react";
import { useMe } from "../../lib/hooks/useMe";
import createComment from "../../lib/Utilities/createComment";

const Reply = (child: any) => {
  const { data, localComments } = child;
  const comment = data.comment;
  const { user } = useMe();
  const [message, setMessage] = useState("");
  const [commentRes, setCommentRes] = useState({
    error: undefined,
    success: undefined,
  });
  const createCommentHandler = async (e: any) => {
    e.preventDefault();
    const respone = await createComment("/comment", {
      message,
      postId: comment.postId,
      userId: user.id,
      parentId: comment.id,
    });
    localComments(respone.user);
    setCommentRes(respone);
  };
  return (
    <>
      {commentRes.success ? (
        <div className="text-gray-600 bg-gray-100 p-2">
          <h1>{commentRes.success}</h1>
        </div>
      ) : (
        <form
          className="flex justify-between items-center gap-4"
          onSubmit={createCommentHandler}
        >
          <Image
            className="rounded-full min-w-[28px] min-h-[28px]"
            src={"/square.jpg"}
            alt="Avatar Image"
            objectFit="fill"
            width={30}
            height={30}
          />
          <input
            type="text"
            required
            className={`shadow-sm flex-1 p-1.5 rounded-lg outline-none ${
              commentRes.error ? "bg-red-100" : "bg-gray-50"
            }`}
            placeholder="Write a reply"
            value={message}
            onChange={(e: any) => {
              setMessage(e.target.value);
            }}
          />
          <button
            className="bg-sky-200 hover:bg-sky-300 p-1.5 rounded-lg"
            type="submit"
          >
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
          </button>
        </form>
      )}
      {commentRes.error && (
        <h2 className="text-red-600 ml-4">{commentRes.error}</h2>
      )}
    </>
  );
};
export default Reply;
