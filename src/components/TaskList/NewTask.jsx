const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-full max-w-xs sm:max-w-sm bg-gray-800 rounded-xl shadow-md p-4 sm:p-5 text-white mx-auto">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-3 gap-1 sm:gap-0">
        <span className="bg-blue-500 text-xs px-3 py-1 rounded-full uppercase tracking-wide mb-1 sm:mb-0">
          {data.category}
        </span>
        <span className="text-xs sm:text-sm text-gray-300">{data.taskDate}</span>
      </div>

      
      <h2 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{data.taskTitle}</h2>

      <p className="text-xs sm:text-sm text-gray-400">{data.taskDescription}</p>
      <div className="mt-4 sm:mt-5">
        <button
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-medium py-2 rounded-md transition"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
