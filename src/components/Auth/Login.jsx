import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-2 sm:px-0">
      <div className="w-full max-w-xs sm:max-w-md bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-emerald-400 mb-6 sm:mb-8">
          Login to Your Account
        </h2>
        <form onSubmit={submitHandler} className="flex flex-col space-y-4 sm:space-y-5">
          
          <div>
            <label className="block text-xs sm:text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 sm:px-4 py-2 rounded-lg bg-gray-700 border border-emerald-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition text-xs sm:text-base"
            />
          </div>

         
          <div>
            <label className="block text-xs sm:text-sm mb-1 text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 sm:px-4 py-2 rounded-lg bg-gray-700 border border-emerald-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition text-xs sm:text-base"
            />
          </div>

         
          <button
            type="submit"
            className="w-full py-2 sm:py-2.5 bg-emerald-500 hover:bg-emerald-600 transition text-base sm:text-lg font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
