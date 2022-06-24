import React from "react";
import { useState, useEffect } from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";
import productos from '../../util/productos.json'

const products = [
  {
    id: "3",
    titulo: "Remera",
    precio: "$ 1500",
    categoria: 1,
    imagen:
      "https://www.lolitamoda.com/uploads/ckeditor/pictures/481/content_guardarropa_b_sico_para_ni_as.jpg",
    stock: "Stock disponible: 10",
    detalle: "Remara de	algodón",
  },
  {
    id: "33",
    titulo: "Remera",
    precio: "$ 15300",
    categoria: 2,
    imagen:
      "https://www.lolitamoda.com/uploads/ckeditor/pictures/481/content_guardarropa_b_sico_para_ni_as.jpg",
    stock: "Stock disponible: 10",
    detalle: "Remara de	algodón",
  },
  {
    id: "334",
    titulo: "Remera Goku",
    precio: "$ 4300",
    categoria: 1,
    imagen:
      "https://www.lolitamoda.com/uploads/ckeditor/pictures/481/content_guardarropa_b_sico_para_ni_as.jpg",
    stock: "Stock disponible: 10",
    detalle: "Remara de	algodón",
  },
  {
    id: "5",
    titulo: "Calzas",
    precio: "$ 2700",
    categoria: 3,
    imagen:
      "https://www.aboutespanol.com/thmb/QOLEp-Qe27lAmB-IUDHgUNyxg-4=/900x668/filters:no_upscale():max_bytes(150000):strip_icc()/leggins-basicos-TCP-56a8076c3df78cf7729b84cb.jpg",
    stock: "Stock disponible: 10",
    detalle: "Calza de algodon y lycra ",
  },
  {
    id: "6",
    titulo: "Camperas",
    precio: "$ 6500",
    imagen: "https://www.grisino.com/media/catalog/product/g/2/g2hg08.jpg",
    stock: "Stock disponible: 10",
    detalle: "Camperas abrigadas",
  },
];

function ItemList(props) {

  const [list, setList] = useState([]);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      setTimeout(resolve(products), 2000);
    });

    task
      .then((result) => {
        setList(result);
      })
      .catch((err) => {
        console.log("Captura cualquier error en el proceso");
      });
  }, []);

  if (list.length === 0) {
    return <div>Cargando!!!</div>;
  }

  return (
    <div>
      <Grid container spacing={2}>
        {list.map((product) => (
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
