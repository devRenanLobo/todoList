import React, {useState, useEffect} from 'react';
import Form from './Form/Form';
import Tasks from './Tasks/Tasks';
import image from '../assets/images/hand.png';
import axios from 'axios';

import './Main.css'

export default function Main(){

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8888/todoList', {})
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    const addTask = (newTask) => {
        if(newTask.trim() !==''){
            const currentDate = new Date().toLocaleDateString();
            const newTaskObj = {
                text: newTask,
                date: currentDate,
            };
            setTasks([newTaskObj, ...tasks,]);
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