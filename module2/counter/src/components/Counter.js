import {useState} from 'react';

function Counter() {
    // state variable 
    const [counter, setCounter] = useState(0);
    
    // new state countByTwo 
    const [countByTwo, setCounterByTwo] = useState(0);

    function handleClick() {
        setCounter(counter + 1);
    }

    // Declare handleCountByTwo
    function handleClickByTwo() {
        setCounterByTwo(countByTwo + 2);
    }

    return (
        <div>
            <h2>Counter: {counter}</h2>

            <button onClick={handleClick}>Click Me</button>

            <h2>Count by two: {countByTwo}</h2>
            <button onClick={handleClickByTwo}>Click Me for Two</button>

        </div>
    )
}

export default Counter;