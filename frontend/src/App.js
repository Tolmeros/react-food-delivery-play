import * as React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from "./components/NavigationBar.js";
import { Routes, Route } from "react-router-dom";

import Shop from './pages/Shop';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route index path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
