import React from 'react'
import { useState } from 'react'
import { addTodo, deleteTodo, removeTodo, } from '../actions/action';
import { useDispatch, useSelector } from 'react-redux';

export default function Todo() {

    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducers.list)
    const dispatch = useDispatch();
    const changeEvent = (e) => {
        setInputData(e.target.value);
    }

    const handleAddTodo =()=>{
        if (inputData!==""){
            dispatch(addTodo(inputData), setInputData(""));
        }
        else{
           alert( "Please fill out the form") ;
        }
        
    }
    return (
        <div>
            <div className="main-div">
                <div className="child-div">
                    <h2 className='header'>Add Your Task 👇</h2>
                    <div className="Additems">
                        <input type="text" placeholder="Enter Your Task Here"
                            value={inputData}
                            onChange={changeEvent} /> <button class="my-button" onClick={handleAddTodo} >Go</button>
                    </div>
                </div>
                <div className="showitems">
                    {
                        list.map((ele) => {
                            return (
                                <div className="eachitem" key={ele.id}>
                                    <span><h3> &#9745;{ele.data}</h3></span>
                                    <button className='dltb'>Delete</button>
                            
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        </div>
    )
}
