import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login"); // redirect back if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-8 text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          Welcome Back 🎉
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          You have successfully logged in. This is your home page.
        </p>
        <button
          onClick={handleLogout}
          className="px-6 py-3 rounded-xl bg-red-500 text-white font-semibold shadow-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
