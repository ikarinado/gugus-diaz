import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { Button } from "@mui/material";
import { productos } from "../../util/productos";
import { useParams } from "react-router";

function ItemDatailContainer(props) {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
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
      <Button onClick={() => props.onSelect(null)}>Atras</Button>
      <ItemDetail producto={producto} />
    </div>
  );
}
export default ItemDatailContainer;
