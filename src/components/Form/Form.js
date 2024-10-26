import React from 'react';
import { useState } from 'react';
import {IoMdAddCircle} from 'react-icons/io';

import './Form.css';

export default function Form({addTask}){

    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
            addTask(task);
            setTask('');   
    }
    
    return (
        <form onSubmit={handleSubmit} className='form' >
            <label htmlFor='task'></label>
            <input id='task' 
                value={task}
                type="text" 
                placeholder='Add a task'
                onChange={(e) => setTask(e.target.value)}></input>
            <button type='submit'>
                <IoMdAddCircle />
            </button>
        </form>
    );
}