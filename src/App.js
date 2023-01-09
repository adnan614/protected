import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import NavBar from "./NavBar";
import Protected from "./Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<Protected Component={About} />} />
          <Route path="/contact" element={<Protected Component={Contact} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
