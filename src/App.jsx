import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Products from "./Components/Products/Products";
import AllCategories from "./Components/AllCategories/AllCategories";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import About from "./Components/About/About";
import Login from "./Components/Authantication/Login/Login";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<AllCategories />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories/:categoryName" element={
            <Products categoryProducts={true} />} />
          <Route path="/login" element={<Login />} />
          {/* Protected Route */}
          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
