import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is", email);
    console.log("password is", password);

    setEmail("");
    setPassword("");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md  rounded-2xl shadow-2xl p-10 border border-emerald-600">
        <h2 className="text-3xl font-bold text-emerald-700 mb-8 text-center">
          Login
        </h2>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col gap-5 w-full"
        >
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border border-emerald-600 py-3 px-5 text-lg text-emerald-900 outline-none bg-emerald-50 rounded-xl placeholder:text-emerald-400 focus:ring-2 focus:ring-emerald-300 transition w-full"
            type="email"
            placeholder="Enter your email"
          />
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border border-emerald-600 py-3 px-5 text-lg text-emerald-900 outline-none bg-emerald-50 rounded-xl placeholder:text-emerald-400 focus:ring-2 focus:ring-emerald-300 transition w-full"
            type="password"
            placeholder="Enter your password"
          />
          <button
            className="mt-4 bg-emerald-600 hover:bg-emerald-700 transition text-lg font-semibold text-white py-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 w-full"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
