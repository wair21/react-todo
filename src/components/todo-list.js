import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList =() => {
    return (
        <ul>
            <li> <TodoListItem/></li>
            <li> <TodoListItem/></li>
            <li> <TodoListItem/></li>
            <li> 22 </li>
        </ul>
    );
};

export default TodoList;