import React, { ReactNode } from "react";
import Sidebar from "./(components)/sidebar/Sidebar";
import Navbar from "./(components)/navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import {
  DashboardLinks,
  adminHomeMenu,
  profileAndSupportLinks,
} from "./(components)/links";
import { ToastContainer } from "react-toastify";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ToastContainer position="top-right" />
      <div className="flex w-full">
        <div className="w-64 max-sm:hidden max-md:w-52 max-h-screen min-h-screen">
          <div className="fixed w-64 max-sm:hidden max-md:w-52 ">
            <Sidebar
              DashboardLinks={DashboardLinks}
              HomeMenu={adminHomeMenu}
              SidebarFooterMenu={profileAndSupportLinks}
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <Navbar />
          <div className="w-full p-4 mt-14">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
