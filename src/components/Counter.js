import React, {useState} from "react";

const Counter = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((count) => ++count);
    }

    const decrement = () => {
        setCount((count) => --count);
    }

    const reset = () => {
        setCount(0);
    }
    return (
        <>
            <h2>Counter Value... {count}</h2>
            <button type="button" onClick={increment}>Increment</button>
            <button type="button" onClick={decrement}>Decrement</button>
            <button type="button" onClick={reset}>Reset</button>
        </>
    )
}

export default Counter;