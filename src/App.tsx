import React, { useState } from 'react';
import { TodoList } from "./TodoList";
import { AddTodoForm } from './AddTodoForm';

const initialTodos: Todo[] = [
    {
        text: 'Walk the dog',
        complete: false
    },
    {
        text: 'explore React',
        complete: false
    },
    {
        text: 'Do smthng new',
        complete: true
    },
];

function App() {
    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo = (selectedTodo: Todo) => {
        const newTodos = todos.map((todo) => {
           if (todo === selectedTodo) {
               return {
                   ...todo,
                   complete: !todo.complete
               }
           }
           return todo;
        });

        setTodos(newTodos);
    };

    const addTodo = (text: string) => {
      const newTodo = { text,  complete: false };
      setTodos([...todos, newTodo]);
    };

    return (
        <ul>
            <TodoList todos={ todos } toggleTodo={toggleTodo}/>
            <AddTodoForm addTodo={ addTodo }/>
        </ul>
    );
}

export default App;
