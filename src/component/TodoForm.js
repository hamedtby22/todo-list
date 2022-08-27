import React, { useEffect, useRef, useState } from 'react';

//styles
import './TodoForm.scss';

const TodoForm = (props) => {
    const [input,setInput] = useState(props.edit ? props.edit.text : "")
    const inputrRef = useRef();
    useEffect(() => {
        inputrRef.current.focus();
    },[])
    const changeHandler = (event) => {
        setInput(event.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if(!input){
            alert("there is not todo !!!")
            return;
        }
        props.submitTodo(input);
        setInput("")
    }
    return (
            <form onSubmit={submitHandler}>
                <div className='formTodo'>
                    <input 
                    type="text" 
                    value={input} 
                    onChange={changeHandler} 
                    placeholder={props.edit ? "Update Value" : "Add too"} 
                    ref={inputrRef} />
                    <button type="submit">{props.edit ? "Update" : "Add"}</button>   
                </div>    
            </form>
        
        
    );
};

export default TodoForm;