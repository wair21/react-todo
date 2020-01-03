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
            this.createTodoItem('DrincCoddee')
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

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

    /**
     * обработка события добавления элемента в список
     * @param text
     */
    addItem = (text) => {
        this.setState(({todoData})=> {
        const newArr = [
                ...todoData,
           // newItem
            this.createTodoItem(text)
        ];

        return {
            todoData: newArr
        }
        });
    };

    /**
     * Счетчик важных
     * @param id
     */
    toggleImportant = (id) => {
         this.changeData(id, 'done');
    };

    /**
     * счетчик выполненных
     * @param id
     */
    toggleDone = (id) => {
          this.changeData(id, 'important');
    };

    changeData= (id, name) => {

        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, [name]: !oldItem[name]};

            const newData =[
                ...todoData.slice(0,idx),
                newItem,
                ...todoData.slice(idx+1)
            ];

            return  {
                todoData: newData
            };
        });
    };


    render () {
        const countDone = this.state.todoData
            .filter((el) =>  el.done ).length;

        const countTodo = this.state.todoData.length - countDone;

        return (
            <div>
                <span> { new Date().toString()}</span>
                <AppHeader toDo={countTodo} done={countDone}/>
                <SearchPanel/>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={(id)=> this.deleteItem(id)}
                    onToggleImportant={(id)=> this.toggleImportant(id)}
                    onToggleDone={(id)=> this.toggleDone(id)}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
};
