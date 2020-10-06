import React from "react";

function Label({ children, ...props }) {
  return (
    <label
      className="block text-sm font-semibold text-gray-700 mb-2"
      {...props}
    >
      {children}
    </label>
  );
}

export default Label;
