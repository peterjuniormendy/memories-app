import React from "react";

const CustomButton = ({ className, type, children, ...otherProps }) => {
  return (
    <button
      type={type}
      className={`py-1.5 px-5    rounded-md shadow-md active:shadow-none ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
