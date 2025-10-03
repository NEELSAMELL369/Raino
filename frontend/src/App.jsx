import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CatalogPage from "./Pages/CatalogPage";
import SingleProduct from "./Pages/SingleProduct";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Catalog / Homepage */}
        <Route path="/" element={<CatalogPage />} />

        {/* Product Details Page */}
        <Route path="/products/:id" element={<SingleProduct />} />

        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
