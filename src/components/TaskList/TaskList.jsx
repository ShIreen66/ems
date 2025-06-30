import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  const { tasks } = data;

  return (
    <div className="mt-6 sm:mt-10">
      <h2 className="text-xl sm:text-2xl font-bold text-emerald-400 mb-3 sm:mb-4">
        Task List
      </h2>

      {tasks && tasks.length > 0 ? (
        <div className="flex flex-col sm:flex-row overflow-x-auto space-y-4 sm:space-y-0 sm:space-x-5 py-2 px-1">
          {tasks.map((task, idx) => {
            if (task.active) return <AcceptTask key={idx} data={task} />;
            if (task.newTask) return <NewTask key={idx} data={task} />;
            if (task.completed) return <CompleteTask key={idx} data={task} />;
            if (task.failed) return <FailedTask key={idx} data={task} />;
            return null;
          })}
        </div>
      ) : (
        <p className="text-gray-400">No tasks assigned yet.</p>
      )}
    </div>
  );
};

export default TaskList;
