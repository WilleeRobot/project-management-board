import { useEffect, useState } from "react";
import Lane from "../components/Lanes/Lane";
import useDataFetching from "../hooks/useDataFetching";
import "./Board.css";

const onDragStart = (e, id) => {
  e.dataTransfer.setData("id", id);
};

const onDragOver = (e) => {
  e.preventDefault();
};

const Board = () => {
  const tasksAPIURL = `https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks`;
  const [loading, error, data] = useDataFetching(tasksAPIURL);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, [data]);

  const lanes = [
    { id: 1, title: "To do" },
    { id: 2, title: "In progress" },
    { id: 3, title: "Complete" },
    { id: 4, title: "Done" },
  ];

  const onDrop = (e, laneId) => {
    const id = e.dataTransfer.getData("id");
    const updatedTasks = tasks.filter((task) => {
      if (task.id.toString() === id) {
        task.lane = laneId;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="board-section">
      {lanes.map((lane) => (
        <Lane
          key={lane.id}
          laneId={lane.id}
          title={lane.title}
          loading={loading}
          error={error}
          tasks={tasks.filter((task) => task.lane === lane.id)}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
        />
      ))}
    </div>
  );
};

export default Board;
