import React from "react";

const TaskNumberList = ({ data }) => {
  const { newTask, completed, active, failed } = data.taskCounts;

  const cards = [
    {
      count: newTask,
      label: "New Tasks",
      bgColor: "bg-blue-500",
    },
    {
      count: completed,
      label: "Completed",
      bgColor: "bg-green-500",
    },
    {
      count: active,
      label: "Active",
      bgColor: "bg-yellow-400 text-black",
    },
    {
      count: failed,
      label: "Failed",
      bgColor: "bg-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-4 sm:mt-8">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`rounded-xl py-4 sm:py-6 px-4 sm:px-6 shadow-md text-white ${card.bgColor} flex flex-col items-center justify-center min-w-0`}
        >
          <h2 className="text-2xl sm:text-4xl font-bold">{card.count}</h2>
          <p className="text-base sm:text-lg mt-1 sm:mt-2 font-medium">{card.label}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskNumberList;
