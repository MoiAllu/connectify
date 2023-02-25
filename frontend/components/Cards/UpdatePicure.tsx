import Image from "next/image";
import { useState } from "react";
import uploadToCloudinary from "../../lib/Utilities/multer/profilemulter";
import UploadProfileUrl from "../../lib/Utilities/user/uploadProfileUrl";

const UpdatePicture = ({ setProfileButton, user }: any) => {
  const [picture, setPicture] = useState(user?.profilePicture || "/squre.jpg");

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
    const resPostgres = await UploadProfileUrl({ user, pictureUrl });
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
            <input type="file" id="img" name="img" accept="image/*" />
            {picture && (
              <button
                className=" bg-blue-600 px-3 py-1 rounded-sm text-white hover:bg-blue-400 transition-colors shadow-md"
                type="submit"
              >
                <span>Upload</span>
              </button>
            )}
          </form>
        </div>
      </div>
      <div className="md:hidden flex-col flex max-h-[160px] max-w-[160px] ">
        <Image
          className="rounded-md shadow-md"
          src={picture}
          width={300}
          height={300}
        />
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
        <div className="md:px-5 px-2 py-2 bg-blue-600 rounded-md shadow-sm hover:bg-gray-400 transition-all text-white text-[12px] md:text-[15px]">
          <button>Save</button>
        </div>
        <div className="md:px-4 px-2 py-2 bg-red-600 rounded-md shadow-sm hover:bg-red-400 transition-all text-white text-[12px] md:text-[15px]">
          <button onClick={() => setProfileButton(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
export default UpdatePicture;
