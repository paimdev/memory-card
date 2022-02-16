import { useEffect, useState } from "react";

function Card(props) {

  return (
    <div className="card border border-black h-40 m-4"
    name={props.name} onClick={props.handleClick}
    >
    {props.name}
    </div>
  );
}

export default Card;
