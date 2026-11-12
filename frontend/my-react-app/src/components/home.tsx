
import Navbar from './navbar';
import Footer from './footer';

const Home = ({props} : any) => {
    return (
        <>  
            <Navbar />
            
            <p>Home Page</p>
            <p>Users:</p>
            {props.map((item: any) => (
                <p key={item.id}>{item.name} - {item.email}</p>
            ))}
            
            <Footer />
           {/* <ClassComponent /> */}

        </>
    );
};

export default Home;