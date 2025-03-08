import { useEffect, useState } from "react";
import { BsPencilSquare ,BsFillTrashFill} from "react-icons/bs";

const apiKey="014ea21ffe58241638be80a224fd81bb";

export const TaskOutput =({tasklist, setTasklist,task, setTask}) =>{

    const handleEdit=(id) => {
        const selectedTask = tasklist.find(todo => todo.id === id);
        setTask(selectedTask)
    }

    const handleDelete=(id) =>{
        const updatedTaskList = tasklist.filter(todo => todo.id !== id);
        setTasklist(updatedTaskList)
    }

    const groupedTasksByMode =(tasks) =>{
        return tasks.reduce((acc,task) => {
            if(task.mode){
                if(!acc[task.mode]){
                    acc[task.mode]=[];
                }
                acc[task.mode].push(task);
            }
            return acc;
        },{});
    };

    const groupedTasks = groupedTasksByMode(tasklist);
    const modeOrder= ["easy","intermediate","hard"]

    return(
        <section className="showTask">
            <div className="head">
                <div >
                    <span className="title">Todo</span>
                    <span className="count">{tasklist.length}</span>
                </div>
                <button className="clearAll" onClick={() => setTasklist([])}>Clear All</button>
            </div>

            <div className="task-groups">
                {modeOrder.map((mode) => {
                    if(groupedTasks[mode] && groupedTasks[mode].length > 0){
                        return(
                        <div key={mode} className={`task-group ${mode}`}>
                        <ul>
                {groupedTasks[mode].map((todo) => (
                    <li key={todo.id}>
                    <p>
                        <span className="name">{todo.name}</span>
                        <span className="time">{todo.time}</span>
                        <span className="mode">{todo.mode}</span>
                    </p>

                    {todo.weather ? (
                        <p className="weather">
                            Weather in {todo.city} : {todo.weather.main.temp}°C,
                            {todo.weather.weather[0].description}
                        </p>
                    ) : (
                        <p>Weather data not available</p>
                    )}

                    <p onClick={() => handleEdit(todo.id)}><BsPencilSquare className="edit"/></p>
                    <p onClick={() => handleDelete(todo.id)}><BsFillTrashFill className="delete"/></p>
                </li>
                ))}
                
            </ul>
                    </div>
            );
                    }
                    return null;
})}
            </div>
        </section>
    )
}