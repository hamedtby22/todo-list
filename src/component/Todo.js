import React from 'react';

//styles
import './Todo.scss';

const Todo = ({todo,oncomplete,onDelete,editTodo}) => {
    return (
        <div className='todo'>
            <div className={todo.isComplete ? 'completed' : ""}>{todo.text}</div>
            <div className='btn'>
                <button onClick={editTodo} className='btnEdit'>Edit</button>
                <button className={todo.isComplete ? 'oncompleted' : ""} onClick={oncomplete}>Complete</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Todo;