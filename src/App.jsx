import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductHome from "./pages/ProductHome";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductHome />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
