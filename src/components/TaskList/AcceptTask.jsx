const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-gray-800 rounded-xl shadow-md p-5 text-white">
      {/* Header: Category and Date */}
      <div className="flex justify-between items-center mb-4">
        <span className="bg-emerald-600 text-xs px-3 py-1 rounded-full uppercase tracking-wide">
          {data.category}
        </span>
        <span className="text-sm text-gray-300">{data.taskDate}</span>
      </div>

      {/* Task Title */}
      <h2 className="text-xl font-bold mb-2">{data.taskTitle}</h2>

      {/* Description */}
      <p className="text-sm text-gray-400">{data.taskDescription}</p>

      {/* Action Buttons */}
      <div className="flex justify-between mt-6">
        <button className="bg-green-500 hover:bg-green-600 text-white text-xs font-medium py-2 px-3 rounded-md transition">
          Mark as Completed
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white text-xs font-medium py-2 px-3 rounded-md transition">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
