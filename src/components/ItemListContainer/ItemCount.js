import { CenterFocusStrong } from "@mui/icons-material";
import React, { useState } from "react";

function ItemCount(props) {
  const [count, setcount] = useState(props.inicial);

  return (
    <div style={{display: "flex",justifyContent: "center",alignItems: "center", gap: 10 }}>
      <button disabled={count === props.inicial} onClick={() => setcount(count - 1)}> - </button>
      <span>{count}</span>
      <button disabled={count === props.stock} onClick={() => setcount(count + 1)}> + </button>
    </div>
  );
}
export default ItemCount;
