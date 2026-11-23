
import Home from "./components/home";
import Home2 from "./components/home2";
import Login from "./components/login";
import Api from "./components/hooks";
import Drilling from "./components/drilling";
import ContextExample from "./components/context";
import { Routes, Route } from "react-router-dom";
import UseRefExample from "./components/useref";
import Form from "./components/form";
import EventHandle from "./components/event-Handle";

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
        <Route path = "/Api" element={<Api />} />
        <Route path="/Drilling" element={<Drilling />} />
        <Route path="/Context" element={<ContextExample />} />
        <Route path='/UseRef' element={<UseRefExample />} />
        <Route path="/EventHandle" element={<EventHandle />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
