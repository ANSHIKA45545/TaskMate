import React, { useEffect, useState } from 'react'
import { TaskInput } from "../Tasks/TaskInput";
import { TaskOutput } from "../Tasks/TaskOutput";
import { Link } from 'react-router-dom';

export const Header =() =>{
      const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
      const [task, setTask] = useState({});
    
      useEffect(() => {
        localStorage.setItem("tasklist", JSON.stringify(tasklist));
      },[tasklist])

    return(
        <>
        <header className="header">
            <div className="logo">
                <p>Taskmate</p>
            </div>

            <div className="login">
                <Link to="/register">Register</Link>
            </div>
        </header>

        
                <TaskInput tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask} />
              <TaskOutput tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask}/>
            
        </>

        
    )
}