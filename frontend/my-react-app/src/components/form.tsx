import { useState } from "react";

const Form = () => {


    const [name ,setName] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        alert('Form submitted! Name: ' + name);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Type something..." onChange={(e) => setName(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );

};

export default Form;