import React, { useState } from "react";

import "./AddingBlock.css";

const AddingBlock = ({ handleAdd }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="adding-block">
      <h3>Here you can add items to your list</h3>
      <textarea
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      ></textarea>
      <button onClick={() => handleAdd(inputValue)}>Add item</button>
    </div>
  );
};

export default AddingBlock;
