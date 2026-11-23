
const EventHandle = () => {

    function handleMouseOver() {
        console.log('Mouse over!');
        alert('Mouse over!');
    }
    return (
        <>
        <h2>Event Handle</h2>

        <button onClick={() => alert('Button clicked!')}>Click Me</button>

        <button onClick={() => console.log('Button clicked!')}>Log Click</button>

        <button onClick={() => alert('Another button clicked!')}>Another Click</button>

        <div style={{ width: '200px', height: '100px', backgroundColor: 'lightblue' }} onMouseOver={handleMouseOver}>Hover here</div>

        <form onSubmit={(e) => {
            e.preventDefault();
            alert('Form submitted!');
        }}>
            <button type="submit">Submit</button>
        </form>

        <input type="text" placeholder="Type something..." onChange={(e) => console.log(e.target.value)} />
        
        </>
    );
};

export default EventHandle;