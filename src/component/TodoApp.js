import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Select from 'react-select';

//styles
import './TodoApp.scss';

const options = [
    {value:"All", label: "All"},
    {value:"completed", label: "completed"},
    {value:"oncompleted", label: "oncompleted"},
]


const TodoApp = () => {

    const [todos,setTodos] = useState([]);
    const [filtertodo,setFiltertodo] = useState([]);
    const [selectedOption,setSelectedOption] = useState("All");
    const [edit,setEdit] = useState({
        id:null,
        text:"",
        isComplete:false
    })

    useEffect(() => {
        filteredtodo(selectedOption.value);

    },[todos,selectedOption]);

    const addtodoHandler = (input) => {
        const newTodo = {
            id:Math.floor(Math.random()* 1000 ),
            text:input,
            isComplete:false
        }
        setTodos([...todos,newTodo]);

    }

    const todoEditHandler = (newValue) => {
        updateTodo(edit.id,newValue);
        setEdit({id:null,text:""})
    }

    const completeTodo = (id) => {
        const index = todos.findIndex(todo => todo.id === id);
        const selectedTodo = {...todos[index]};
        selectedTodo.isComplete = !selectedTodo.isComplete;
        const updatedTodo = [...todos];
        updatedTodo[index] = selectedTodo;
        setTodos(updatedTodo);
    }

    const removeTodo = (id) => {
        const remove = todos.filter(todo => todo.id !== id);
        setTodos(remove);
    }

    const updateTodo = (id,newValue) => {
        const index = todos.findIndex(todo => todo.id === id);
        const selectedTodo = {...todos[index]};
        selectedTodo.text = newValue;
        const updatedTodo = [...todos];
        updatedTodo[index] = selectedTodo;
        setTodos(updatedTodo);
    }

    const filteredtodo = (status) => {
        switch(status) {
            case "completed":
                return setFiltertodo(todos.filter(t=> t.isComplete));
        
            case "oncompleted":
                return setFiltertodo(todos.filter(t=> !t.isComplete));
               
            default:
                return setFiltertodo(todos)         
        }
    }

    const changeHandler = (e) => {
        setSelectedOption(e);
        filteredtodo(e.value)
    }

    return (
        <div className='container'>
            <h1>TODO H LIST</h1> 
            {
                edit.id ? 
                (<div className='todoslist__edit'><TodoForm submitTodo={todoEditHandler} edit={edit}/></div>) 
                :
                <TodoForm submitTodo={addtodoHandler} /> 
            }
            
            {
                todos.length > 0 && <Select 
                onChange={changeHandler} 
                options={options} 
                value={selectedOption} className='select' />
            }

            <TodoList todos={filtertodo} editTodo={setEdit} oncomplete={completeTodo} onDelete={removeTodo} onUpdate={updateTodo} />
        </div>
    );
};

export default TodoApp;