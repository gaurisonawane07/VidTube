import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem("authToken", "sample_token");
      navigate("/home");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg">
      {/* Heading */}
      <div className="flex justify-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">VideoPoint</h1>
      </div>

      {/* Register form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>

      {/* Switch link */}
      <div className="text-center mt-6 text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-blue-600 font-medium hover:underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
