import Product from "./pages/Product";
import Home from "./pages/Home";
import './App.css'
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Success from "./pages/Success";
import { useSelector } from 'react-redux'

//ONCE PAGE REFRESHED USER GOES TO INITIAL STATE. HENCE USE PERSIST.

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route exact path="/products/:category" element={<ProductList />}>
        </Route>
        <Route exact path="/product/:id" element={<Product />}>
        </Route>
        <Route exact path="/cart" element={<Cart />}>
        </Route>
        <Route exact path="/success" element={<Success />}>
        </Route>
        <Route exact path="/login" element={user ? <Navigate to="/" /> : <Login />}>
        </Route>
        <Route exact path="/register" element={user ? <Navigate to="/" /> : <Register />}>
        </Route>
      </Routes>
    </Router>
  )
}

  ;

export default App;