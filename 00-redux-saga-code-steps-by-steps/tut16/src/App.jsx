import React from "react";
import { Routes, Route } from "react-router-dom";

//* Components
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Header />
      <Main/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
