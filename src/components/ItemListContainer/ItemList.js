import React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";

function ItemList(props) {
  if (props.list.length === 0) {
    return <div>Cargando!!!</div>;
  }

  return (
    <div>
      <Grid container spacing={2}>
        {props.list.map((product) => (
          <Grid item xs={4}>
            <Item
              onSelect={props.onSelect}
              key={product.id}
              product={product}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ItemList;
