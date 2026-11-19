
import React, { createContext, useContext } from 'react';



const MyContext = createContext<any>(null);


// Context API ; it is built in react feature used to share data between components 
// without passint Props manually thorugh every level

// -- avoid prop drilling 
// -shaves global data easily 
// -useful for themes authetication,user data,layer setting 

function ContextExample() {
    const name = "I am Grand Child with context";
    return (
        <MyContext.Provider value={name}>
            <Parent />
        </MyContext.Provider>
    );
}

function Parent() {
    return (
        <div>
            Parent Component
            <Child />
        </div>
    );
}

function Child() {
    return (
        <div>
            Child Component
            <GrandChild />
        </div>
    );
}

function GrandChild() {
    const name = useContext(MyContext);
    return (
        <div>
            GrandChild Component
            <h1>{name}</h1>
        </div>
    );
}

export default ContextExample;