import React from 'react'
import ItemCount from './ItemCount';

function ItemListContainer(props){

  return(
    <div style={{ padding:10, fontSize:30, color:"#d41676" }}>
      {props.gretting}
      <ItemCount stock={10} inicial={1}/>
    </div>


  )



}

export default ItemListContainer;