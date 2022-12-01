import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, addByValue } from "./counterSlice";
import React from 'react';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const value = document.getElementById('value');
    const dispatch = useDispatch();
    return (
        <div>
            <h2>
                {count}
            </h2>
            <button onClick={() => dispatch(increment())}> plus</button>
            <button onClick={() => dispatch(decrement())}> minus</button>
            <button onClick={() => dispatch(reset())}> reset</button>
            <br />
            <input type="number" placeholder="enter a value" id="value" />
            <button onClick={() => dispatch(addByValue(Number(value.value)))}> add by value </button>
        </div >
    );
};

export default Counter;