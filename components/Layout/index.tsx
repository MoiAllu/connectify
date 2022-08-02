import React from "react";
import Navbar from "../Navbar";
import LeftSidebar from "../LeftSideBar";
import RightSidebar from "../RightSideBar";

type props = {};

const Layout = ({ children }: any) => {
  return (
    <div>
      <div className="flex bg-gray-50 ">
        <Navbar />
        <LeftSidebar />
      </div>
      <div className="lg:w-[calc(100vw-36vw)] lg:absolute right-[18vw] top-[70px] bg-gray-50 rounded-2xl">
        {children}
      </div>
      <RightSidebar />
    </div>
  );
};

export default Layout;
