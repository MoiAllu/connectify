import React from "react";
import SignIn from "../../pages/signin";
import Navbar from "../NavBar";

type props = {};

const Layout = ({ children }: any) => {
  return (
    <div>
      <div className="flex bg-gray-50 ">
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default Layout;
