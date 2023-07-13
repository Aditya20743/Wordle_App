import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ KeyVal, bigKey, disabled }) {
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);

  const selectLetter = () => {
    if (KeyVal === "ENTER") {
      onEnter();
    } else if (KeyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(KeyVal);
    }
  };
  return (
    <div
      className="key"
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {KeyVal}{" "}
    </div>
  );
}

export default Key;
