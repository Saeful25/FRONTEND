import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
  let { id } = useParams();
  return (
    <div>
      <h1>Detail</h1>
      <p>Parameter id : {id}</p>
    </div>
  );
}

export default Detail;
