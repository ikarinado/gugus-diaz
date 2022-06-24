import "./App.css";
import Menu from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDatailContainer from "./components/ItemDetailContainer";
import React,{useState} from 'react'
import { Routes, Route } from "react-router-dom";
function App() {
  const [seleccionado, setSeleccionado] = useState(null);
  const onSelect=(producto)=>{
    setSeleccionado(producto)
  }
  return (
    <div className='App'>
      <Menu />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDatailContainer />} />
      </Routes>
      {/*<Menu />
      {seleccionado ? (
        <ItemDatailContainer producto={seleccionado} onSelect={onSelect}/>
      ) : (
        <ItemListContainer onSelect={onSelect} gretting='mensaje gretting' />
      )}*/}
    </div>
  );
}

export default App;
