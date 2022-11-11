import React,{useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className="container">
                <p>Count is: {count}</p>
                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Count</button>
            </div>
        </>
    )
}

export default Counter