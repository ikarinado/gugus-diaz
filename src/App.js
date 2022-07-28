import "./App.css";
import Menu from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDatailContainer from "./components/ItemDetailContainer";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Contactos from "./components/Contactos";
import { Container } from "@mui/material";

function App() {
  return (
    <div className='App'>
      <Menu />
      <Container>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDatailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Container>
      <Contactos />
    </div>
  );
}

export default App;
