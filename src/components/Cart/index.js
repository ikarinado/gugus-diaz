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
  Alert,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

function Cart() {
  const [orderId, setOrderId] = useState(null);
  const { productos, removeProductos, vaciarCarrito } = useContext(CartContext);
  const cantP = productos.length;
  const buyer = { name: "Agustin", phone: 1222, email: "agustin@gmail" };
  const items = productos.map((item) => {
    return {
      id: item.producto.id,
      titulo: item.producto.titulo,
      precio: item.producto.precio,
    };
  });
  let preciototal = 0;
  productos.forEach((producto) => {
    preciototal = preciototal + producto.producto.precio * producto.cantidad;
  });

  const setOrder = () => {
    const body = {
      buyer,
      items,
      date: new Date(),
      total: preciototal,
    };
    const db = getFirestore();
    const bodysCollection = collection(db, "orders");
    addDoc(bodysCollection, body).then(({ id }) => {
      setOrderId(id);
    });
  };
  const irAinicio = () => {
    vaciarCarrito();
    window.location.href = "/";
  };

  if (cantP === 0) {
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
      <Typography>
        Cantidad de productos:<strong>{cantP}</strong>
      </Typography>
      <Typography>
        Precio de la compra:<strong>${preciototal}</strong>
      </Typography>

      <List>
        {productos.map((product, index) => (
          <ListItem
            key={product.producto.titulo}
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
      {!orderId && (
        <Button onClick={() => setOrder()} variant='contained'>
          Terminar compra
        </Button>
      )}

      {orderId && (
        <div>
          <Button onClick={() => irAinicio()} variant='contained'>
            Seguir comprando
          </Button>
          <Alert severity='success'>
            Tu compra se realizo correctamente.! El numero de tu compra es:{" "}
            {orderId}
          </Alert>
        </div>
      )}
    </div>
  );
}

export default Cart;
