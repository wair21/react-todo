import React, { Component } from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";
import './app.css';

export default class App extends Component {
    // первоначальная id = 100
    maxId = 100;

    state = {
        todoData: [
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
        ],
        show: {
            toDo: 3,
            done: 1
        }
    };

    /**
     *  удаление из списка
     * @param id
     */
    deleteItem = (id) => {
       this.setState(({ todoData }) => {
         const idx = todoData.findIndex((el) => el.id === id);

         // формируем массив без удаленного элемента
         const newData =[
             ...todoData.slice(0,idx),
             ...todoData.slice(idx+1)
         ];

         return  {
            todoData: newData
           };
        });
    };

    addItem = (text) => {
        // compose new data for item
        const newItem = {
            label: text,
            important: false,
             id: this.maxId++
        };

        // add new tem to list
        this.setState(({todoData})=> {
        const newArr = [
                ...todoData,
            newItem
        ];

        return {
            todoData: newArr
        }
        });
    };

    render () {
        return (
            <div>
                <span> { new Date().toString()}</span>
                <AppHeader toDo={this.state.show.toDo} done={this.state.show.done}/>
                <SearchPanel/>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={(id)=> this.deleteItem(id)}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
};
