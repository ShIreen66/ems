const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-full max-w-xs sm:max-w-sm bg-gray-800 rounded-xl shadow-md p-4 sm:p-5 text-white mx-auto">
     
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4 gap-1 sm:gap-0">
        <span className="bg-emerald-600 text-xs px-3 py-1 rounded-full uppercase tracking-wide mb-1 sm:mb-0">
          {data.category}
        </span>
        <span className="text-xs sm:text-sm text-gray-300">{data.taskDate}</span>
      </div>

     
      <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{data.taskTitle}</h2>

     
      <p className="text-xs sm:text-sm text-gray-400">{data.taskDescription}</p>

     
      <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 mt-4 sm:mt-6">
        <button className="bg-green-500 hover:bg-green-600 text-white text-xs font-medium py-2 px-3 rounded-md transition w-full sm:w-auto">
          Mark as Completed
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white text-xs font-medium py-2 px-3 rounded-md transition w-full sm:w-auto">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
