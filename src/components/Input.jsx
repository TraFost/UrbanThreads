import React from "react";
import className from "classnames";

const Input = React.forwardRef(({ onBlur, onChange, ...rest }, ref) => {
  const classes = className(
    rest.className,
    "input input-bordered w-full max-w-xs"
  );
  return (
    <input
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      {...rest}
      className={classes}
    />
  );
});

export default Input;
