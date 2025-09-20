import React, { useState, useEffect } from "react";
import './CurrentTask.css';
import type { Task } from "../models/tasks";

const CurrentTask : React.FC<{ task: Task }> = ({ task }) => {
    const [timeRemaining, setTimeRemaining] = useState(0);

    useEffect(() => {
        const updateTimer = () => {
            const remaining = task.timeEnd.getTime() - Date.now();
            setTimeRemaining(Math.max(0, remaining));
        };

        updateTimer();

        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
    }, [task.timeEnd]);

    const hours = Math.floor(timeRemaining / 3600000);
    const minutes = Math.floor((timeRemaining % 3600000) / 60000);
    const seconds = Math.floor((timeRemaining % 60000) / 1000);

    return (
        <div className="container2">
            <h1>Current Task:</h1>
            <div className="task-details">
                <p className="task-name">Task Name: {task.name}</p>
                <p className="task-time">Time Remaining: {hours}h {minutes}m {seconds}s</p>
            </div>
        </div>
    );
};

export default CurrentTask;