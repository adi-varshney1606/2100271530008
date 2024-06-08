import "./App.css";
import "tailwindcss/tailwind.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProductDetail />} />
          <Route exact path="/productlist" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
