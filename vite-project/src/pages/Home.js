import React from "react";
import { useDispatch } from "react-redux";
import { setRole } from "../features/authSlice";

const Home = () => {
  const dispatch = useDispatch();

  const handleLogin = (role) => {
    const permissions = role === "admin" ? ["view", "edit", "delete"] : ["view"];
    dispatch(setRole({ role, permissions }));
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Role-Based Access Control</h1>
      <div className="space-x-4">
        <button
          onClick={() => handleLogin("admin")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login as Admin
        </button>
        <button
          onClick={() => handleLogin("viewer")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Login as Viewer
        </button>
      </div>
    </div>
  );
};

export default Home;
