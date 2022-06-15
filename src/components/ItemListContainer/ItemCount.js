import React, { useState } from "react";

function ItemCount(props) {
  const [count, setcount] = useState(props.inicial);

  return (
    <div>
      <button onClick={() => setcount(count + 1)}> + </button>
      <span>{count}</span>
      <button onClick={() => setcount(count - 1)}> - </button>
    </div>
  );
}
export default ItemCount;
