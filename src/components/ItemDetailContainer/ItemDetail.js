import React from 'react'
import Item from '../ItemListContainer/Item'

function ItemDetail(props){
  console.log(props.producto.titulo)
return(

  <div>
<Item product={props.producto}/>
  </div>
)
}
export default ItemDetail;