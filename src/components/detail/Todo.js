import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Todo = ({ todo }) => (
    <li>
        <FontAwesomeIcon icon={todo.check?"check-circle":["far", "check-circle"]} /> <a >{todo.label}</a>
    </li>
);

export default Todo;