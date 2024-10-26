import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

import './Tasks.css';

const tarefas = ["Estudar para a prova", "Comprar a comida do cachorro", "Levar a mãe ao médico"];

export default function Tasks(){
    return(
        <div  className='container'>
            <ul>
                {tarefas.map((tarefa) =>(
                    <li key={tarefa}>{tarefa}
                    <div className='lista'>
                        <FaEdit className='edit'/>
                        <MdDeleteForever className='delete'/>
                    </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}