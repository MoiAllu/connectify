import type { NextPage } from "next";
import Head from "next/head";
import NotificationList from "../../components/NotificationList";

const NotificationsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Connectify | Notifications</title>
        <meta
          name="description"
          content="Connectify is a social media app made by Ali and Talal."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center min-h-[calc(100vh-70px)] relative top-[70px] lg:top-0 h-full w-full bg-gray-50 p-6 rounded-2xl">
        <div className="bg-white w-full h-full p-4 rounded-2xl">
          <div className="flex justify-between w-full p-2 pb-4 border-b">
            <p className="font-bold text-gray-700">Notification</p>
            <button className="text-blue-500 hover:underline underline-offset-1">
              Mark all as read
            </button>
          </div>
          <NotificationList />
          {/* Remove below 2  */}
          <NotificationList />
          <NotificationList />
        </div>
      </div>
    </>
  );
};

export default NotificationsPage;
