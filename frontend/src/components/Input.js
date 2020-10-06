import React from "react";

function Input(props) {
  return (
    <input
      className="w-full px-4 py-2 border border-gray-500 rounded bg-white focus:outline-none focus:border-purple-500"
      {...props}
    />
  );
}

export default Input;
