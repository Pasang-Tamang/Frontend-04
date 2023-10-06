import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import { Routes, Route } from "react-router-dom";
import Quotes from "./components/Student";
import Products from "./components/Products";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
