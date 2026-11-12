import react from 'react';


function Home2({props} : any) {
    return (
        <>
            <p>Users:</p>
            {props.map((item: any) => (
                <p key={item.id}>{item.name} - {item.email}</p>
            ))}
        </>
    );
} 

export default Home2;