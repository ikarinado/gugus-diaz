import "./App.css";
import Menu from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDatailContainer from "./components/ItemDetailContainer";
import React,{useState} from 'react'
function App() {
  const [seleccionado, setSeleccionado] = useState(null);
  const onSelect=(producto)=>{
    setSeleccionado(producto)
  }
  return (
    <div className='App'>
      <Menu />
      {seleccionado ? (
        <ItemDatailContainer producto={seleccionado} onSelect={onSelect}/>
      ) : (
        <ItemListContainer onSelect={onSelect} gretting='mensaje gretting' />
      )}
    </div>
  );
}

export default App;
