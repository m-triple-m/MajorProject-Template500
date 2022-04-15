import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import { AccountCircle, AccountCircleOutlined } from "@mui/icons-material";

const Admin = () => {
  const options = [
    {
      name: "Profile",
      icon: <AccountCircle />,
      link: "/admin/profile",
    },
    {
      name: "Profile",
      icon: <AccountCircle />,
      link: "/admin/profile",
    },
    {
      name: "Manage User",
      icon: <AccountCircleOutlined />,
      link: "/admin/profile",
    },
  ];

  return (
    <div>
      <h1>Admin Component</h1>
      <Sidebar title="Admin Dashboard" options={options}>
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default Admin;
