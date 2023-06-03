import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';

function App() {
  // Enable Smooth Scrolling
  window.scroll({ behavior: 'smooth' })

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
