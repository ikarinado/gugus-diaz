import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";

import React from "react";

function Item(prop) {
  const { id, titulo, precio, imagen, stock, detalle } = prop;
  return (
    <Card>
    <CardMedia
        component='img'
        alt='green iguana'
        height='300'
        image={imagen}
      />
      <CardContent>
        <Typography gutterBottom variant='h4' component='div'>
          {titulo}
        </Typography>
        <Typography gutterBottom variant='body2' component='div'>
          {detalle}
        </Typography>
        <Typography gutterBottom variant='body1' component='div'>
          {precio}
        </Typography>
        <Typography gutterBottom variant='subtitle2' component='div'>
          {stock}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size='small' variant='contained'>Ver mas</Button>
      </CardActions>
    </Card>
  );
}

export default Item;