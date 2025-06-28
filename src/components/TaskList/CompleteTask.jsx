

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[300px] bg-gray-800 rounded-xl shadow-md p-5 text-white">
      {/* Header: Category and Date */}
      <div className="flex justify-between items-center mb-3">
        <span className="bg-indigo-500 text-xs px-3 py-1 rounded-full uppercase tracking-wide">
          {data.category}
        </span>
        <span className="text-sm text-gray-300">{data.taskDate}</span>
      </div>

      {/* Task Title */}
      <h2 className="text-lg font-semibold mb-2">{data.taskTitle}</h2>

      {/* Task Description */}
      <p className="text-sm text-gray-400">{data.taskDescription}</p>

      {/* Complete Button */}
      <div className="mt-5">
        <button
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium py-2 rounded-md transition"
        >
          Mark as Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
