import React from 'react';
import {IoMdAddCircle} from 'react-icons/io';

import './Form.css';

export default function Form(){
    return (
        <form action="#" className='form' >
            <input type="text" placeholder='Add a task'></input>
            <button type='submit'><IoMdAddCircle /></button>
        </form>
    );
}