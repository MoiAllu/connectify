import type { NextPage } from "next";
import Head from "next/head";
import ModelOverlay from "../../components/UI/ModalOverlay";
import UserInforBar from "../../components/Cards/UserInfoBar";
import UpdatePicture from "../../components/Cards/UpdatePicure";

const Settings: NextPage = () => {
  return (
    <>
      <Head>
        <title>Connectify | Settings</title>
        <meta
          name="description"
          content="Connectify is a social media app made by Ali and Talal."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center min-h-[calc(100vh-70px)] bg-gray-50 px-4">
        setting
      </div>
    </>
  );
};

export default Settings;
