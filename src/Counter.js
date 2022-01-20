import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleCounterUpdate = () => {
        const updatedCounter = counter + 1;
        setCounter(updatedCounter);
        console.log('counter:', counter);
    }

    return (<div>
        <span>Counter : {counter} </span>
        <button onClick={handleCounterUpdate} >Counter update</button>
        </div>)

};

export default Counter;