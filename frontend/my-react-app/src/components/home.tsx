
import Navbar from './navbar';
import Footer from './footer';

const Home = (props) => {
    return (
        <>
            <Navbar />
            
            <p>Home Page</p>
            <p>Welcome, {props.name}!</p>
            
            <Footer />
           {/* <ClassComponent /> */}

        </>
    );
};

export default Home;