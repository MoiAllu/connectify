import Image from "next/image";
import { useState } from "react";
import uploadToCloudinary from "../../lib/Utilities/multer/profilemulter";
import UploadBgPicture from "../../lib/Utilities/user/uploadBgPicture";

const UserProfile = ({ user, setProfileButton, owner }: any) => {
  const [isSelected, setIsSelected] = useState(false);
  const [picture, setPicture] = useState(user?.bgPicture || "/Background.jpg");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const [success, setSuccess] = useState(false);

  const setPictureHandler = (e: any) => {
    e.preventDefault();
    setIsSelected(false);
    setError("");
    setResponse("");
    setSuccess(false);
    const reader = new FileReader();
    reader.onload = function (onLoadEvent: any) {
      setPicture(onLoadEvent.target.result);
      setIsSelected(true);
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
    const resPostres = await UploadBgPicture({ user, pictureUrl });
    if (resPostres.status === 200) {
      setSuccess(true);
      setResponse("successfully updated profile picture");
      setIsLoading(false);
      setIsSelected(false);
      return;
    }
    setError(resPostres.statusText);
    setSuccess(false);
    setIsLoading(false);
    setIsSelected(false);
  };

  return (
    <div className="bg-white p-2 w-full rounded-2xl shadow-sm">
      <div
        className={`h-[312px] w-full rounded-lg  items-center justify-center`}
      >
        <div className="flex relative">
          <img
            src={picture}
            width="100%"
            height="312px"
            className=" absolute flex object-cover h-[312px] w-full rounded-lg "
          />
        </div>

        <div className="justify-between flex h-full">
          <div className="h-full mt-[215px] px-6">
            {/** using div as profile picture as it is easy more versatile to give border radius as giving to an image */}
            <div
              className={`rounded-full outline outline-white w-[120px] h-[120px] absolute`}
            >
              <Image
                className="rounded-full "
                src={user.profilePicture || "/square.jpg"}
                alt="Avatar Image"
                objectFit="fill"
                width={120}
                height={120}
              />
            </div>
          </div>

          <div className="h-full mt-[250px] px-8 ">
            {owner && (
              <form
                className="flex flex-col gap-2 "
                onSubmit={uploadPictureHandler}
                onChange={setPictureHandler}
                encType="multipart/form-data"
              >
                <button
                  className={`${
                    isSelected
                      ? "hidden"
                      : "hidden sm:flex bg-white px-2 py-1 rounded-sm shadow-sm text-gray-700 transition-all hover:bg-gray-300 z-10"
                  } `}
                  type="button"
                >
                  <label className="text-xs" htmlFor="img">
                    Edit Cover Photo
                  </label>
                  <input
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                    className="hidden"
                  />
                </button>
                {isSelected && (
                  <div className="flex gap-2 text-xs z-20 text-gray-600 justify-center rounded-sm">
                    <button
                      type="submit"
                      className="px-3 py-1 bg-white rounded-sm hover:bg-gray-300 transition-colors"
                      disabled={isLoading}
                    >
                      <div className="flex text-xs justify-center items-center ">
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

                        {isLoading ? "Saving" : "Save"}
                      </div>
                    </button>
                    <button
                      type="button"
                      className="px-2 py-1 bg-white rounded-sm hover:bg-gray-300 transition-colors"
                      onClick={() => {
                        setIsSelected(false);
                        setPicture(user?.bgPicture);
                      }}
                    >
                      Cancel{" "}
                    </button>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
      {error && <p className="text-red-500 px-2 py-1">{error}</p>}
      {response ? ( // if response is true then show the response
        <div
          className={`flex rounded-md w-full h-full justify-center px-2 ${
            success && "bg-gray-400  shadow-sm"
          }`}
        >
          <p className={` ${success ? "" : "text-red-500"}`}>{response}</p>
        </div>
      ) : (
        ""
      )}
      <div className="mt-6 p-4">
        <h1 className="font-bold text-gray-700 text-2xl ">{user?.name}</h1>
        <div className=" flex w-full justify-between text-gray-400 text-xs">
          <h3 className="p-2">UI Designer</h3>
          {owner && (
            <div className="flex">
              <button
                className="font-semibold text-gray-700 mr-4 bg-gray-50 rounded-md transition-all p-3 hover:bg-gray-300 shadow-md "
                onClick={() => setProfileButton(true)}
              >
                Edit basic info
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
