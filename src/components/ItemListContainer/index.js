import React from "react";
import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { productos } from "../../util/productos";
import { useParams } from "react-router";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function ItemListContainer(props) {
  const { id } = useParams();
  const [list, setList] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const collections = collection(db, "productos");
    getDocs(collections).then((snapshot) => {
      let res = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      if (id) {
        res = productos.filter((producto) => producto.categoria == id);
      }


      setList(res);
    });

  }, [id]);

  return (
    <div style={{ padding: 10, fontSize: 30, color: "#d41676" }}>
      <ItemList list={list} onSelect={props.onSelect} />
    </div>
  );
}

export default ItemListContainer;
