import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950">
      {/* 🔹 Only render inner card (from Login/Register) */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;
