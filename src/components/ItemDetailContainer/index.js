import React from "react";
import ItemDetail from "./ItemDetail";
import {Button} from "@mui/material";

function ItemDatailContainer(props) {
  return (
    <div>
      <Button onClick={() => props.onSelect(null)}>Atras</Button>
      <ItemDetail product={props.producto} />
    </div>
  );
}
export default ItemDatailContainer;
