import React, { useEffect, useState } from "react";
import Navbar from "../NavBar";
import LeftSidebar from "../LeftSideBar";
import RightSidebar from "../RightSideBar";
import { NextRouter, useRouter } from "next/router";

type props = {};

const Layout = ({ children, user }: any) => {
  //condition for not diplaying right sideBar on profile Page:
  const router: NextRouter = useRouter();
  const [hideRightBar, isHideRightBar] = useState(false);
  useEffect(() => {
    if (["/profile", "/messages"].includes(router.pathname)) {
      isHideRightBar(true);
      console.log("Ali");
    } else isHideRightBar(false);
  }, [router]);
  // TODO - Get auth and conditionaly render Sidebars for signin and signup pages
  const auth: boolean = true;
  return (
    <>
      <div className="flex bg-gray-50 ">
        <Navbar user={user} />
      </div>
      {auth && <LeftSidebar />}
      <div
        className={`${
          auth ? "lg:w-[calc(100vw-36vw)] right-[18vw]" : "lg:w-[100vw]"
        } ${
          hideRightBar && "lg:w-[calc(100vw-18vw)] right-0"
        } lg:absolute  top-[70px] bg-gray-50 rounded-2xl`}
      >
        {children}
      </div>

      {auth && hideRightBar ? "" : <RightSidebar />}
    </>
  );
};

export default Layout;
