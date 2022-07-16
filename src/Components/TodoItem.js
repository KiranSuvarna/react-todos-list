import React from 'react';

const TodoItem = ({todoItem, onDelete}) => {
   if (todoItem) {
    return( 
        <div className="container">
            <h4>
                {todoItem.title}
            </h4>
            <p>
                {todoItem.desc}
            </p>
            <button className="btn btn-danger btn-sm" onClick={() => {onDelete(todoItem)}}>
                Delete
            </button>
            <hr/>
        </div>
    )
   } 
}

export default TodoItem;