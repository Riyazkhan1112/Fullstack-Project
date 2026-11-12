
import Home from "./components/home";
import Login from "./components/login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/Home" element={<Home  name = "User" />} />
     </Routes>  
    </>
  );
}

export default App;
