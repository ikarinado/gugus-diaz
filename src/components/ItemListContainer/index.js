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
      setList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    /*const task = new Promise((resolve, reject) => {
      let res = productos;
      if (id) {
        res = productos.filter((producto) => producto.categoria == id);
      }
      setTimeout(resolve(res), 2000);
    });

    task
      .then((result) => {
        setList(result);
      })
      .catch((err) => {

      });*/
  }, [id]);

  return (
    <div style={{ padding: 10, fontSize: 30, color: "#d41676" }}>
      <ItemList list={list} onSelect={props.onSelect} />
    </div>
  );
}

export default ItemListContainer;
