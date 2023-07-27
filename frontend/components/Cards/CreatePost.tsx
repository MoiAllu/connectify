import React, { useState, useEffect } from "react";
import Image from "next/image";
import createPost from "../../lib/Utilities/posts/createPost";
import { useMe } from "../../lib/hooks/useMe";
import uploadToCloudinary from "../../lib/Utilities/multer/profilemulter";

type Props = {};

const CreatePost = (props: Props) => {
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState("");
  const { user } = useMe();
  const [isLoading, setIsLoading] = useState(false);
  const [resResult, setResResult] = useState({
    error: undefined,
    success: undefined,
  });
  const onSelectFile = (e: any) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = function (onLoadEvent: any) {
      setPreview(onLoadEvent.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
    console.log(preview);
  };
  const formSubmitHanlder = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    const fileInput: any = Array.from(form.elements).find(
      ({ name }: any) => name === "img"
    );
    const formData = new FormData();
    for (const file of fileInput.files) {
      formData.append("file", file);
    }
    formData.append("upload_preset", "unsigned_upload");
    const pictureUrl = await uploadToCloudinary(formData);
    const url = await pictureUrl.secure_url;
    const userId = await user.id;
    const respone = await createPost("/post", {
      content,
      user,
      userId,
      url,
    });
    setIsLoading(false);
    setResResult(respone);
  };
  return (
    <div className="w-full px-1 py-8">
      {resResult.success ? (
        <div className="text-gray-600 bg-white rounded-md p-3">
          <h1>{resResult.success}</h1>
        </div>
      ) : (
        <form
          className="bg-white rounded-xl px-2 py-3 shadow-md"
          onSubmit={formSubmitHanlder}
        >
          <div className=" flex p-2 text-left gap-2 mb-3 ">
            <Image
              className="rounded-full"
              src={user?.profilePicture || "/square.jpg"}
              alt="Avatar"
              objectFit="fill"
              width={50}
              height={40}
            />
            <div className="w-full flex ">
              <div
                className={`${
                  resResult.error
                    ? "bg-red-100 px-1 py-2 rounded-lg w-full focus:shadow-lg"
                    : " bg-gray-50 px-1 py-2 rounded-lg w-full focus:shadow-lg"
                }`}
              >
                <input
                  className={`${
                    resResult.error
                      ? " w-full bg-red-100 p-0.5 outline-none "
                      : "w-full bg-gray-50 p-0.5 outline-none "
                  } `}
                  required
                  type="text"
                  placeholder=" What's happening?"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          {resResult && (
            <h2 className="text-red-600 ml-4">{resResult?.error}</h2>
          )}
          {preview && (
            <div className="h-full flex gap-3 justify-center">
              <img
                src={preview}
                className="rounded max-w-[500px] max-h-[500px] object-contain"
              ></img>
              <button
                className="flex"
                type="button"
                onClick={() => setPreview("")}
              >
                <Image
                  src="/delete1.svg"
                  width="34px"
                  height="34px "
                  className="opacity-70"
                />
              </button>
            </div>
          )}
          <div className="gap-2 px-3 hidden text-gray-900 sm:flex">
            <button className="flex p-2 flex-1" type="button">
              <div className="py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
                  <rect x="3" y="6" width="12" height="12" rx="2" />
                </svg>
              </div>
              <h3 className="text-center p-2 text-sm">Live Video</h3>
            </button>

            <button className="gap-1 flex p-2 flex-1 " type="button">
              <div className="flex hover:bg-gray-200 transition-all hover:shadow-md px-2 rounded-md hover:scale-105 ease-in-out">
                <div className="py-2">
                  <Image
                    width="20px"
                    height="20px "
                    src="/Photoicon.svg"
                    alt="Photo" // blurDataURL="data:..."
                  ></Image>
                </div>
                <label
                  className=" p-2 text-sm  text-left hover:cursor-pointer"
                  htmlFor="upImg"
                >
                  Photo Video
                </label>
                <input
                  type="file"
                  id="upImg"
                  name="img"
                  accept="image/*"
                  className="hidden"
                  onChange={onSelectFile}
                />
              </div>
            </button>

            <button className="flex py-2 flex-1 " type="button">
              <div className="py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-mood-smile"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <line x1="9" y1="10" x2="9.01" y2="10" />
                  <line x1="15" y1="10" x2="15.01" y2="10" />
                  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                </svg>
              </div>
              <h3 className="text-center p-2 text-sm">Feeling</h3>
            </button>
            <div className="text-right  mt-2  sm:min-w-[50px]">
              <button
                disabled={isLoading}
                className={`flex px-6 gap-1 py-2 text-white rounded-md  hover:shadow-lg ${
                  isLoading ? "bg-gray-400" : "bg-blue-500"
                }`}
                onSubmit={formSubmitHanlder}
              >
                {isLoading && (
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
                )}
                {isLoading ? "Posting" : "Post"}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
export default CreatePost;
