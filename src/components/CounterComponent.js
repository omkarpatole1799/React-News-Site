import React, { useState } from 'react'
import LoginFormCom from './LoginFormCom';

export default function CounterComponent(props) {
    function increaseCount() {
        let c = count + 1;
        setCount(c);
    }
    function decreaseCount() {
        if (count != 0) {
            let c = count - 1;
            setCount(c);
        }
    }
    function resetCount() {
        setCount(0);
    }
    const [count, setCount] = useState(0);

    const [status, setStatus] = useState(true);

    function show() {
        setStatus(true);
    }
    function hide() {
        setStatus(false);
    }
    function toggle() {
        setStatus(!status);
    }

    return (
        <>
            <div className="container mt-3 pt-3" style={{
                backgroundColor: props.mode === 'light' ? 'white' : 'black',
                color: props.mode === 'dark' ? 'white' : 'black'
            }}>

                <h3><div>Add to cart : {count}</div></h3>
                <button className='btn btn-primary mx-1' onClick={increaseCount}>Increment</button>
                <button className='btn btn-primary mx-1' onClick={decreaseCount}>Decrement</button>
                <button className='btn btn-primary mx-1' onClick={resetCount}>Reset</button>
            </div>


            <div className="container">
                <div>
                    {
                        status ?
                            <h2>Omkar Patole</h2>
                            : null
                    }
                </div>

                <button className="btn btn-primary btn-sm" onClick={show}>Show</button>
                <button className="btn btn-primary btn-sm" onClick={hide}>Hide</button>
                <button className="btn btn-primary btn-sm" onClick={toggle}>Toggle</button>
            </div>


            <div className="container">
                <LoginFormCom />
            </div>
        </>
    )
}
