import Image from "next/image";
import { useState } from "react";
import { useMe } from "../../lib/hooks/useMe";
import createComment from "../../lib/Utilities/comments/createComment";

const Reply = (child: any) => {
  const { data, localComments } = child;
  console.log(child);
  const comment = data.comment;
  const { user } = useMe();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [commentRes, setCommentRes] = useState({
    error: undefined,
    success: undefined,
  });
  const createCommentHandler = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const respone = await createComment("/comment", {
      message,
      postId: comment.postId,
      userId: user.id,
      parentId: comment.id,
    });
    localComments(respone?.user);
    setIsLoading(false);
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
            {isLoading ? (
              <svg
                aria-hidden="true"
                className="mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
            ) : (
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
            )}
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
