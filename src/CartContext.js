import React, { useState, createContext } from "react";

export const CartContext = createContext(null);

export default ({ children }) => {
  const [productos, setProductos] = useState([]);
  const store = {
    empresa: "",
    productos,
    removeProductos: (posicion) => {
      const copia = [...productos];
      copia.splice(posicion, 1);
      setProductos(copia);
    },
    addProducto: (item, qty) => {
      const pr = {
        producto: item,
        cantidad: qty,
      };
      setProductos([...productos, pr]);
    },
    vaciarCarrito: () => {
      setProductos([])
    }
  };

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
};
