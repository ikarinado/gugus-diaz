import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import ItemCount from "../ItemListContainer/ItemCount";

function ItemDetail(props) {
  const [cantidad, setCantidad] = useState(1);
  if (!props.producto) {
    return <div>Cargando!</div>;
  }
  const { id, titulo, precio, imagen, stock, detalle } = props.producto;


  return (
    <div>
      <Card>
        <CardMedia
          component='img'
          alt='green iguana'
          height='600'
          image={imagen}
        />
        <CardContent>
          <Typography gutterBottom variant='h2' component='div'>
            {titulo} {cantidad}
          </Typography>
          <Typography gutterBottom variant='body1' component='div'>
            {detalle}
          </Typography>
          <Typography gutterBottom variant='body2' component='div'>
            {precio}
          </Typography>
          <Typography gutterBottom variant='subtitle1' component='div'>
            {stock}
          </Typography>
        </CardContent>

        <CardActions>
          <ItemCount onAdd={setCantidad} inicial={cantidad} />
          <button>
          <Link to="cart">Terminar mi compra</Link>
          </button>
          {props.onSelect && (
            <Button
              onClick={() => props.onSelect(props.product)}
              size='small'
              variant='contained'
            >
              Ver mas
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
}
export default ItemDetail;
