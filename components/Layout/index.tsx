import React, { useEffect, useState } from "react";
import Navbar from "../NavBar";
import LeftSidebar from "../LeftSideBar";
import RightSidebar from "../RightSideBar";
import { useRouter } from "next/router";

type props = {};

const Layout = ({ children }: any) => {
  //condition for not diplaying right sideBar on profile Page:
  const router = useRouter();
  const [route, isRoute] = useState(false);
  useEffect(() => {
    if (router.pathname == "/profile") {
      isRoute(true);
      console.log("Ali");
    } else isRoute(false);
  }, [router]);

  console.log(router.pathname);
  // TODO - Get auth and conditionaly render Sidebars for signin and signup pages
  const auth: boolean = true;
  return (
    <>
      <div className="flex bg-gray-50 ">
        <Navbar />
      </div>
      {auth && <LeftSidebar />}
      <div
        className={`${
          auth ? "lg:w-[calc(100vw-36vw)] right-[18vw]" : "lg:w-[100vw]"
        } lg:absolute  top-[70px] bg-gray-50 rounded-2xl`}
      >
        {children}
      </div>

      {auth && route ? "" : <RightSidebar />}
    </>
  );
};

export default Layout;
