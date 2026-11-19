import { useState, useEffect } from 'react';

function Hooks() {

    const [post ,setPost] = useState([]);
    const [post2, setPost2] = useState([]);
    
    async function fetchPosts() {  
        try {
            console.log('Fetching posts...');
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPost(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    async function fetchPosts2() {  
        try {
            console.log('Fetching posts2...');
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const data = await response.json();
            setPost2(data);
        } catch (error) {
            console.error('Error fetching posts2:', error);
        }
    }


    useEffect(() => {
        fetchPosts();
    }, []);   //  fetch data on the initial render - apne aap chal jata hai jab components render hota hai - use effect

    return (
        <>
        <button onClick={fetchPosts2}>Fetch Posts2</button>
            { post.map((item: any) => (
               <div key={item.id}>
                   <div>{item.id}</div>
                   <div>{item.title}</div>
               </div>
            ))}
            <p>Posts2:</p>
            { post2.map((item: any) => (
               <div key={item.id}>
                   <div>{item.id}</div>
                   <div>{item.name}</div>
               </div>
            ))}
        </>
    );



}

export default Hooks;