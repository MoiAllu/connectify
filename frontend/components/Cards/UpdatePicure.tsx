import Image from "next/image";
import { useState, useEffect } from "react";
import uploadToCloudinary from "../../lib/Utilities/multer/profilemulter";
import UploadProfileUrl from "../../lib/Utilities/user/uploadProfileUrl";

const UpdatePicture = ({ setProfileButton, user }: any) => {
  const [picture, setPicture] = useState(user?.profilePicture || "/squre.jpg");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const [success, setSuccess] = useState(false);

  const setPictureHandler = (e: any) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = function (onLoadEvent: any) {
      setPicture(onLoadEvent.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const uploadPictureHandler = async (e: any) => {
    e.preventDefault();
    setError("");
    setResponse("");
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
    // const data = await fetch(`/api/cloud`, {
    //   method: "POST",
    //   credentials: "include",
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   body: picture,
    // });
    // console.log(data);
    // const data = await fetch(
    //   "https://api.cloudinary.com/v1_1/doiif4p0p/image/upload",
    //   {
    //     method: "POST",
    //     body: formData,
    //   }
    // ).then((r) => r.json());
    const pictureUrl = await uploadToCloudinary(formData);
    if (pictureUrl.error) {
      setError(pictureUrl.error.message);
      setIsLoading(false);
      return;
    }
    const resPostres = await UploadProfileUrl({ user, pictureUrl });
    if (resPostres.status === 200) {
      setSuccess(true);
      setResponse("successfully updated profile picture");
      setIsLoading(false);
      return;
    }
    setError(resPostres.statusText);
    setSuccess(false);
    setIsLoading(false);
  };
  return (
    <div className="z-20 bg-white lg:w-[70vw] w-[75vw] lg:h-[60vh] h-[50vh] max-w-[1250px] max-h-[750px]  shadow-lg rounded-md flex flex-col items-center justify-center md:p-5 p-1">
      <div className="flex sm:p-5 p-1 h-full w-full">
        <div className="md:flex flex-col gap-2 hidden ">
          <h1 className="font-semibold text-lg">Ali Abbasi</h1>
          <Image
            className="rounded-md shadow-md"
            src={picture}
            width={300}
            height={300}
          />
        </div>
        <div className="flex md:px-10 md:items-center">
          <form
            className="flex flex-col gap-1 items-start text-[12px] md:text-lg"
            onSubmit={uploadPictureHandler}
            onChange={setPictureHandler}
            encType="multipart/form-data"
          >
            <label htmlFor="img">Select image:</label>
            {error && <p className="text-red-500">{error}</p>}
            <input type="file" id="img" name="img" accept="image/*" />
            {response ? (
              <div
                className={`flex rounded-sm ${
                  success && "bg-green-200 px-2 py-1 shadow-sm"
                }`}
              >
                <p className={` ${success ? "" : "text-red-500"}`}>
                  {response}
                </p>
              </div>
            ) : (
              ""
            )}
            {picture && (
              <button
                className={`bg-blue-600 px-3 py-1 rounded-sm text-white hover:bg-blue-400 transition-colors shadow-md ${
                  isLoading && "bg-gray-300 hover:bg-gray-300"
                }`}
                type="submit"
                disabled={isLoading}
              >
                <div className="flex">
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
                  {isLoading ? "Uploading" : "Upload"}
                </div>
              </button>
            )}
          </form>
        </div>
      </div>
      <div className="md:hidden flex-col flex max-h-[160px] max-w-[160px] ">
        {picture && (
          <Image
            className="rounded-md shadow-md"
            src={picture}
            width={300}
            height={300}
          />
        )}
      </div>
      <div className="flex-col flex h-full w-[40vw]">
        <label htmlFor="bio" className="text-gray-600">
          Bio&aposs
        </label>
        <input
          type="text"
          id="bio"
          name="bio"
          className="border p-1 rounded-sm text-gray-500 h-full max-h-[100px] "
        ></input>
      </div>
      <div className="flex gap-1 sm:p-4 p-1 justify-end items-end h-full w-full">
        <div className="md:px-4 px-2 py-2 bg-red-600 rounded-md shadow-sm hover:bg-red-400 transition-all text-white text-[12px] md:text-[15px]">
          <button onClick={() => setProfileButton(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
export default UpdatePicture;
