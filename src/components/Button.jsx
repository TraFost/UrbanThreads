import React from "react";
import className from "classnames";

const Button = ({ children, ...rest }) => {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border"
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
