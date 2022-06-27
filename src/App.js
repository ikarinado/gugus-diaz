import "./App.css";
import Menu from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDatailContainer from "./components/ItemDetailContainer";
import React from "react";
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <div className='App'>
      <Menu />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDatailContainer />} />
      </Routes>

    </div>
  );
}

export default App;
