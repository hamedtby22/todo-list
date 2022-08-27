import React from 'react';
import Todo from './Todo';
import './TodoList.scss';


const TodoList = ({todos,oncomplete,onDelete,onUpdate,editTodo}) => {

        return <div>
            <div className={todos.length > 0 && 'todoslist'}>
                
                <div className='todoslist__info'>
                    { 
                    todos.map(todo => <Todo 
                        key={todo.id} 
                        todo={todo} 
                        oncomplete={() => oncomplete(todo.id)} 
                        onDelete={() => onDelete(todo.id)} 
                        editTodo={() => editTodo(todo)} />)
                    }
                </div>
                
            </div>
            
            </div>
}

    

export default TodoList;