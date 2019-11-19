import React from "react";

import classess from"./Button.module.css";

const button = props => {
  return (
    <button
      style={props.customStyle}
      disabled={props.disabled}
      className={classess.Button + ' ' + classess[props.btnType]}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};
export default button;
