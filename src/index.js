import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import ItemStatusFilter from "./components/item-status-filter";


const App = () => {
    const todoData = [
        {
            id: 1,
            label: 'drink something 1',
            important: false
        },
        {
            id: 2,
            label: 'drink tea 2',
            important: true
        },
        {
            id: 3,
            label: 'drink coffee 3',
            important: true
        },
    ];

    return (
        <div>
           <span> { new Date().toString()}</span>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todoData}/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));