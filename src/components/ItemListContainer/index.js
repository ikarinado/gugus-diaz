import React from "react";
import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { productos } from "../../util/productos";
import { useParams } from "react-router";

function ItemListContainer(props) {
  const { id } = useParams();
  const [list, setList] = useState([]);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
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

      });
  }, [id]);

  return (
    <div style={{ padding: 10, fontSize: 30, color: "#d41676" }}>
      {props.gretting}
      <ItemCount stock={10} inicial={1} />
      <ItemList list={list} onSelect={props.onSelect} />
    </div>
  );
}

export default ItemListContainer;
