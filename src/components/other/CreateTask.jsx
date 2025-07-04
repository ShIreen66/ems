import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { userData, setUserData } = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedData = userData.map((employee) => {
      if (employee.firstName === assignTo) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
          taskCounts: {
            ...employee.taskCounts,
            newTask: employee.taskCounts.newTask + 1,
          },
        };
      }
      return employee;
    });

    setUserData(updatedData);
    console.log(updatedData);

    // Clear Form
    setTaskTitle("");
    setCategory("");
    setAssignTo("");
    setTaskDate("");
    setTaskDescription("");
  };

  return (
    <div className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md mt-4 sm:mt-8 w-full max-w-3xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold text-emerald-400 mb-4 sm:mb-6 text-center">
        Create New Task
      </h2>
      <form
        onSubmit={submitHandler}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
      >
        {/* Left Section */}
        <div className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-xs sm:text-sm text-gray-300 mb-1">
              Task Title
            </label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Enter task title"
              className="w-full py-2 px-2 sm:px-3 rounded-lg bg-gray-700 border border-emerald-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-xs sm:text-base"
              required
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm text-gray-300 mb-1">
              Date
            </label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="w-full py-2 px-2 sm:px-3 rounded-lg bg-gray-700 border border-emerald-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-xs sm:text-base"
              required
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm text-gray-300 mb-1">
              Assign To
            </label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              type="text"
              placeholder="Employee name"
              className="w-full py-2 px-2 sm:px-3 rounded-lg bg-gray-700 border border-emerald-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-xs sm:text-base"
              required
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm text-gray-300 mb-1">
              Category
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Design, Development, etc."
              className="w-full py-2 px-2 sm:px-3 rounded-lg bg-gray-700 border border-emerald-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-xs sm:text-base"
              required
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div>
            <label className="block text-xs sm:text-sm text-gray-300 mb-1">
              Description
            </label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Task description..."
              rows="6"
              className="w-full py-2 px-2 sm:px-3 rounded-lg bg-gray-700 border border-emerald-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none min-h-[100px] sm:min-h-[120px] text-xs sm:text-base"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 sm:py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition text-xs sm:text-base"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
