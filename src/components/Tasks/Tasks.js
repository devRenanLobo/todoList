import React from 'react';
import { MdDeleteForever } from "react-icons/md";

import './Tasks.css';

export default function Tasks({tasks, deleteTask}){


    return(
        <div className='container'>
            <div className='header'>
                <div className='headerWrapper'>
                <span className='spanHeader'>Tasks</span>
                <span className='spanHeader'>Date</span>
                </div>
                <span className='spanHeader'>Delete</span>
            </div>
            <ul>
                {tasks.map((task, index) =>(
                    <li key={index}>
                    <div className='infos'>
                    <span className='tasksName'>{task.text}</span>
                    <span className='taksDate'>{task.date}</span>
                    </div>
                        <MdDeleteForever className='delete'
                        onClick={() => deleteTask(index)}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}