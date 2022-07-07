import { Delete } from "@mui/icons-material";
import {
  Card,
  CardContent,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
  List,
  Button,
} from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../CartContext";

function Cart() {
  const { productos, removeProductos, vaciarCarrito } = useContext(CartContext);
  const cantP = productos.length;

  if (cantP === 0) {
    return (
      <Card>
        <CardContent>
          <Typography variant='h4'>El carrito esta vacio</Typography>
        </CardContent>
      </Card>
    );
  }

  let preciototal = 0;
  productos.forEach((producto) => {
    preciototal = preciototal + producto.producto.precio * producto.cantidad;
  });

  return (
    <div>
      <Typography>
        Cantidad de productos:<strong>{cantP}</strong>
      </Typography>
      <Typography>
        Precio de la compra:<strong>${preciototal}</strong>
      </Typography>

      <List>
        {productos.map((product, index) => (
          <ListItem
            secondaryAction={
              <IconButton
                onClick={() => removeProductos(index)}
                edge='end'
                aria-label='delete'
              >
                <Delete />
              </IconButton>
            }
          >
            <ListItemText
              primary={product.producto.titulo}
              secondary={`Cantidad: ${product.cantidad}`}
            />
          </ListItem>
        ))}
      </List>
      <Button onClick={() => vaciarCarrito()} variant='contained'>
        Limpiar carrito
      </Button>
    </div>
  );
}

export default Cart;
