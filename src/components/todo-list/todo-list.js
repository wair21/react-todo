import React from "react";
import TodoListItem from "../todo-list-item/";
import './todo-list.css';

/**
 *  Список
 * @param todos
 * @param onDeleted
 * @returns {*}
 * @constructor
 */
const TodoList =({todos, onDeleted}) => {

    const elements = todos.map((item) => {

        return (
            <li key={ item.id } className='list-group-item'>
                <TodoListItem
                    { ...item}
                    onDeleted ={ () => onDeleted(item.id) }
                />
            </li>
        );
    });
    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;