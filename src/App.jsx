import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductHome from "./pages/ProductHome";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<ProductHome />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
