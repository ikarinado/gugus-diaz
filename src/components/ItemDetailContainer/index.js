import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDatailContainer(props) {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const db = getFirestore();

    const biciRef = doc(db, "productos", itemId);
    getDoc(biciRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto({ id: snapshot.id, ...snapshot.data() });
      }
    });
  }, [itemId]);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
}
export default ItemDatailContainer;
