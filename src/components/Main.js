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
            const formattedTasks = response.data.map(task => ({
                message: task.message,
                date: new Date().toLocaleDateString()
            }))
            setTasks(formattedTasks);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    const addTask = async (newTask) => {
        if(newTask.trim() !==''){
            const currentDate = new Date().toLocaleDateString();
            const newTaskObj = {
                message: newTask,
                date: currentDate,
            };

            try {
                const response = await axios.post('http://localhost:8888/todoList', newTaskObj)
                console.log(response);
                setTasks(prevTasks => [newTaskObj, ...prevTasks])
            } catch (error) {
                console.log(error)
            }
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