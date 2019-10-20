import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoG = ({ todo, onToday, onCheck }) => (
    <li>
        <FontAwesomeIcon onClick={e=>onToday(todo.id)} icon={todo.today?"arrow-alt-circle-left":["far", "arrow-alt-circle-left"]} /> <FontAwesomeIcon onClick={e=>onCheck(todo.id)} icon={todo.check?"check-circle":["far", "check-circle"]} /> <a >{todo.label}</a>
    </li>
);

export default TodoG;
