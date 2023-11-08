import React from 'react'
import { useState } from 'react'
import { addTodo, deleteTodo, removeTodo, } from '../actions/action';
import { useDispatch } from 'react-redux';

export default function Todo() {

    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    const changeEvent = (e) => {
        setInputData(e.target.value);
    }

    return (
        <div>
            <div className="main-div">
                <div className="child-div">
                    <h2 className='header'>Add Your Task 👇</h2>
                    <div className="Additems">
                        <input type="text" placeholder="Enter Your Task Here"
                            value={inputData}
                            onChange={changeEvent} />  <button class="my-button" onClick={() => dispatch(addTodo(inputData))} >Go</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
