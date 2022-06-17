import React from 'react'
import ItemCount from './ItemCount';
import Item from './Item';
import ItemList from './ItemList';

function ItemListContainer(props){

  return(
    <div style={{ padding:10, fontSize:30, color:"#d41676" }}>
      {props.gretting}
      <ItemCount stock={10} inicial={1}/>
      <ItemList />
    </div>


  )



}

export default ItemListContainer;