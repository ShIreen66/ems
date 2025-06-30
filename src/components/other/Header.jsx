import React from "react";

const Header = ({ changeUser, data }) => {
  
  const username = data ? data.firstName : "Admin";

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    changeUser("");
  
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md mb-4 sm:mb-6 gap-3 sm:gap-0">
        <div>
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
          Hello, <span className="text-emerald-400">{username} 👋</span>
        </h1>
        <p className="text-xs sm:text-sm text-gray-400">Welcome to your dashboard</p>
      </div>

      
      <button
        onClick={logOutUser}
        className="bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-md transition"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
