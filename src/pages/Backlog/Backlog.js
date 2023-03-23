import Task from "../../components/Tasks/Task";
import useDataFetching from "../../hooks/useDataFetching";
import "./Backlog.css";

const Backlog = () => {
  const tasksAPIURL = `https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks`;

  const [loading, error, tasks] = useDataFetching(tasksAPIURL);

  return (
    <div className="backlog-wrapper">
      <h2>Backlog</h2>
      <div className="tasks-wrapper">
        {loading || error ? (
          <span>{error || "Loading..."}</span>
        ) : (
          tasks.map((task) => (
            <Task key={task.id} title={task.title} body={task.body} />
          ))
        )}
      </div>
    </div>
  );
};

export default Backlog;
