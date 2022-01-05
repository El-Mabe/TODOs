import React, { useContext } from "react";
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';


function TodoCounter({ total, completed }) {
    const { totalTodos, completedTodos } = useContext(TodoContext)
    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    )
}

export { TodoCounter };