
import Home from "./components/home";
import Home2 from "./components/home2";
import Login from "./components/login";
import { Routes, Route } from "react-router-dom";

function App() {

  const arrayobject = [{
    name: "User",
    id: 1,
    email: "user@example.com"

  },
  {
    name: "Admin",
    id: 2,
    email: "admin@example.com"
  }]
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home props = {arrayobject} />} />
        <Route path="/Home2" element={<Home2 props = {arrayobject} />} />
      </Routes>
    </>
  );
}

export default App;
