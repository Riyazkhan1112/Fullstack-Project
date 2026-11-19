
// prop Drilling = 
// propr drilling nothing but passing data through multiple components via props,
// event thorugg intermediate components dont use that data-they just forward it to next components


function Drilling() {

    const name = "I am Grand Child with prop drilling";
    return (
        <div>
            Drilling Component
            <Parent name = {name} />
        </div>
    );
}

function Parent({name} : any) {
    return (
        <div>
            Parent Component
            <Child name = {name} />
        </div>
    );
}

function Child({name} : any) {
    return (
        <div>
            Child Component
            <GrandChild name = {name} />
        </div>
    );
}

function GrandChild({name} : any) {
    return (
        <div>
            GrandChild Component
            <h1>{name}</h1>
        </div>
    );
}



//demrit
// hard to maintain code when the component tree is deep
// error prone , especially when passing data through many layers

// solution 
// use context API or state management libraries like Redux to avoid prop drilling




export default Drilling;