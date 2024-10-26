import React from 'react';
import Form from './Form/Form';
import Tasks from './Tasks/Tasks';

import './Main.css'


export default function Main(){
    return (
        <div>
            <span>Todo List.</span>
            <Form></Form>
            <Tasks></Tasks>
        </div>
    );
}