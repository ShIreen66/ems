import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white">
      {/* Header */}
      <Header changeUser={props.changeUser} />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-10">
        {/* Create Task Section */}
        <section className="bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">Create New Task</h2>
          <CreateTask />
        </section>

        {/* All Tasks Section */}
        <section className="bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">All Tasks</h2>
          <AllTask />
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
