import React from "react";

const Button = props => {
  const style = {
    backgroundColor: props.color
  };
  return (
    <button onClick={props.onClick} style={style}>
      {props.name}
    </button>
  );
};

export default Button;
