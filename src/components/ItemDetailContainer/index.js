import React from "react";
import ItemDetail from "./ItemDetail";

function ItemDatailContainer(props) {

  return (
    <div>
      <ItemDetail producto={props.producto} />

    </div>
  );
}
export default ItemDatailContainer;
