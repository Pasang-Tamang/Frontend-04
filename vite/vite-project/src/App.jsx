import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import { Routes, Route } from "react-router-dom";
import Quotes from "./components/Student";
import Products from "./components/Products";
import Countdown from "./components/Countdown";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/products" element={<Products />} />
        <Route path="/countdown" element={<Countdown />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
