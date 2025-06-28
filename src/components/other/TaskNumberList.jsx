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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`rounded-xl py-6 px-6 shadow-md text-white ${card.bgColor} flex flex-col items-center justify-center`}
        >
          <h2 className="text-4xl font-bold">{card.count}</h2>
          <p className="text-lg mt-2 font-medium">{card.label}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskNumberList;
