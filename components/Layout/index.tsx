import React from "react";
import Navbar from "../Navbar";
import LeftSidebar from "../LeftSideBar";
import RightSidebar from "../RightSideBar";

type props = {};

const Layout = ({ children }: any) => {
  // TODO - Get auth and conditionaly render Sidebars for signin and signup pages
  const auth: boolean = true;
  return (
    <div>
      <div className="flex bg-gray-50 ">
        <Navbar />
        {auth && <LeftSidebar />}
      </div>
      <div
        className={`${
          auth ? "lg:w-[calc(100vw-36vw)] right-[18vw]" : "lg:w-[100vw]"
        } lg:absolute  top-[70px] bg-gray-50 rounded-2xl`}
      >
        {children}
      </div>
      {auth && <RightSidebar />}
    </div>
  );
};

export default Layout;
