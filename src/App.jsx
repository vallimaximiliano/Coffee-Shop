import { useState } from "react";
import "./App.css";
import GridProduct from "./components/GridProduct";
import DetailProduct from "./components/DetailProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <h1>Coffee Shop</h1>
      </div>
      <Routes>
        <Route exact path="/" element={<GridProduct /> }/>
        <Route exact path="/producto/:id" element={<DetailProduct />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
