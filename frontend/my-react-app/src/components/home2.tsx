import { useState } from 'react';
import Home from './home';


function Home2({props} : any) {


    // use state hooks
    const [count , setCount] =useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };
    const decrementCount = () => {
        if (count === 0) return;
        setCount(count - 1);
    };
    return (
        <>
            <p>Users:</p>
            {props.map((item: any) => (
                <p key={item.id}>{item.name} - {item.email}</p>
            ))}


            <p>Count: {count }</p>
            <button className="increment-button" onClick={incrementCount}>Increment Count</button>
            <button className="decrement-button" onClick={decrementCount} disabled={count === 0}>Decrement Count</button>
            <button className="reset-button" onClick={() => setCount(0)} disabled={count === 0}>Reset Count</button>


        </>
    );






} 

export default Home2;