import React from 'react';
import TodoItem from './TodoItem';

const Todo = (props) => {
    const todoListStyle = {
        minHeight: "60vh"
    }

    return(
        <div className="container" style={todoListStyle}>
            <h3 className="text-center my-3">
                Todos List
            </h3>
            {props.todos.length === 0 ? "No Todos to display" : 
                props.todos.map((todoItem) => {
                    return <TodoItem key={todoItem.id} todoItem={todoItem} onDelete={props.onDelete}/>})
            }
            
        </div>
    );
}

export default Todo;
 