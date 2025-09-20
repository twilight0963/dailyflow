import React from "react";
import './CurrentCompleted.css';


const CurrentCompleted : React.FC = () => {
    return (
        <div className="container">
            <h1>Current Completed Tasks:</h1>
            <h1><span className="completed">2</span>/3</h1>
        </div>
    );
};

export default CurrentCompleted;