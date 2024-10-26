import React from 'react';
import Form from './Form/Form';
import Tasks from './Tasks/Tasks';
import image from '../assets/images/hand.png';

import './Main.css'


export default function Main(){
    return (
        <div className='mainDiv'>
            <div className='titleWrap'>
                <span>Todo List.</span>
                <img src={image} alt="logo"/>
            </div>
            <Form></Form>
            <Tasks></Tasks>
        </div>
    );
}