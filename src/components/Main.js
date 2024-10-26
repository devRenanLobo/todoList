import React, {useState} from 'react';
import Form from './Form/Form';
import Tasks from './Tasks/Tasks';
import image from '../assets/images/hand.png';

import './Main.css'

export default function Main(){

    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        if(newTask.trim() !==''){
            const currentDate = new Date().toLocaleDateString();
            const newTaskObj = {
                text: newTask,
                date: currentDate,
            };
            setTasks([...tasks, newTaskObj]);
        }
    }

    const deleteTask = (index) => {
        const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
        setTasks(newTasks);
    }

    return (
        <div className='mainDiv'>
            <div className='titleWrap'>
                <span>Todo List.</span>
                <img src={image} alt="logo"/>
            </div>
            <Form addTask={addTask}></Form>
            <Tasks tasks={tasks} deleteTask={deleteTask}></Tasks>
        </div>
    );
}