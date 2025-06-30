import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white">
  
      <Header changeUser={props.changeUser} />

    
      <div className="max-w-6xl mx-auto px-2 sm:px-4 py-4 sm:py-6 space-y-6 sm:space-y-10">
        
        <section className="bg-gray-800 rounded-xl shadow-md p-3 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-emerald-400 mb-3 sm:mb-4">Create New Task</h2>
          <CreateTask />
        </section>

        
        <section className="bg-gray-800 rounded-xl shadow-md p-3 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-emerald-400 mb-3 sm:mb-4">All Tasks</h2>
          <AllTask />
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
