import React from "react";
import "./Task.css";

type Time = `${number}:${number}`;
interface Task{
    title: string,
    timeRange: [Time,Time]
}

const Tasks: React.FC<Task> = ({title, timeRange}) => {
  return (
    <div className="task-wrapper">
      <div className="task-card">
        <div className="task-title">{title}</div>
        <div className="task-time">{timeRange}</div>
      </div>
    </div>
  );
}

export default Tasks;
