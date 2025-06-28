import React from "react";

const Header = ({ changeUser, data }) => {
  // ✅ Get Username based on login type
  const username = data ? data.firstName : "Admin";

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    changeUser("");
    // Optionally: window.location.reload();
  };

  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md mb-6">
      {/* Greeting */}
      <div>
        <h1 className="text-xl md:text-2xl font-semibold text-white">
          Hello, <span className="text-emerald-400">{username} 👋</span>
        </h1>
        <p className="text-sm text-gray-400">Welcome to your dashboard</p>
      </div>

      {/* Logout Button */}
      <button
        onClick={logOutUser}
        className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-md transition"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
