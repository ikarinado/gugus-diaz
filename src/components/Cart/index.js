import { Delete } from "@mui/icons-material";
import {
  Card,
  CardContent,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
  List,
} from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../CartContext";

function Cart() {
  const { productos, removeProductos } = useContext(CartContext);
  if (productos.length === 0) {
    return (
      <Card>
        <CardContent>
          <Typography variant='h4'>El carrito esta vacio</Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      <List>
        {productos.map((product, index) => (
          <ListItem
            secondaryAction={
              <IconButton onClick={() => removeProductos(index)} edge='end' aria-label='delete'>
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
    </div>
  );
}

export default Cart;
