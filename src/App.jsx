import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Products from "./Components/Products/Products";
import AllCategories from "./Components/AllCategories/AllCategories";

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<AllCategories/>} />
          <Route path="/categories/:categoryName" element={<Products />} />
          <Route path='/*' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
