import { Button, IconButton, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import { CartContext } from "../../CartContext";

function ItemCount(props) {
  const [count, setcount] = useState(props.inicial);
  const { productos, removeProductos, empresa } = useContext(CartContext);


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        flexDirection: 'column',
        margin: '0 auto'
      }}
    >
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}>
      <Button
        disabled={count === props.inicial}
        onClick={() => setcount(count - 1)}
        variant="contained"
      >
        -
      </Button>
      <Typography variant="h4">{count}</Typography>
      <Button
        disabled={count === props.stock}
        onClick={() => setcount(count + 1)}
        variant="contained"
      >
        +
      </Button>
      </div>
      <Button onClick={()=>props.onAdd(count)} variant="outlined">Agregar</Button>
    </div>
  );
}
export default ItemCount;
