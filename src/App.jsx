import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Products from "./Components/Products/Products";
import AllCategories from "./Components/AllCategories/AllCategories";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<AllCategories />} />
          <Route path="/categories/:categoryName" element={
            <Products categoryProducts={true} />} />
          <Route path="/*" element={<PageNotFound/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
