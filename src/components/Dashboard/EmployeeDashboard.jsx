import React from "react";
import Header from "../other/Header";
import TaskList from "../TaskList/TaskList";
import TaskNumberList from "../other/TaskNumberList";

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white">
    
      <Header changeUser={props.changeUser} data={props.data} />

      
      <div className="max-w-6xl mx-auto px-2 sm:px-4 py-4 sm:py-6 space-y-6 sm:space-y-10">
       
        <section className="bg-gray-800 rounded-xl shadow-md p-3 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-emerald-400 mb-3 sm:mb-4">Your Task Summary</h2>
          <TaskNumberList data={props.data} />
        </section>

        
        <section className="bg-gray-800 rounded-xl shadow-md p-3 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-emerald-400 mb-3 sm:mb-4">All Your Tasks</h2>
          <TaskList data={props.data} />
        </section>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
