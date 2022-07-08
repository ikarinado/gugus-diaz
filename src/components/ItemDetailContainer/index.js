import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { productos } from "../../util/productos";
import { useParams } from "react-router";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDatailContainer(props) {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const db = getFirestore();

    const biciRef = doc(db, "productos", "5SwiI6tpEqH9Gm7hgvL4");
    getDoc(biciRef).then((snapshot)=> {
      if (snapshot.exists()) {
        console.log(snapshot.data())
      }
    })
    const task = new Promise((resolve, reject) => {
      const res = productos.find((producto) => producto.id == itemId);

      setTimeout(resolve(res), 2000);
    });

    task
      .then((result) => {
        setProducto(result);
      })
      .catch((err) => {});
  }, [itemId]);
  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
}
export default ItemDatailContainer;
