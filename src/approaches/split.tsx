import React, { useState } from "react";
import "./App.css";
const CharList = () => {
  const handleKeydown = () => {
    setKeydownCount((prev) => prev++);
    console.log(keydownCount);
  };
  const [keydownCount, setKeydownCount] = useState(0);
  const [chars, setChars] = useState([
    { id: "0", char: "t" },
    { id: "1", char: "h" },
    { id: "2", char: "e" },
    { id: "3", char: " " },
    { id: "4", char: "q" },
    { id: "5", char: "u" },
    { id: "6", char: "i" },
    { id: "7", char: "c" },
    { id: "8", char: "k" },
  ]);
  return (
    <>
      {chars.map((char) => (
        <span id={char.id} key={char.id} onKeyDown={handleKeydown}>
          {char.char}
        </span>
      ))}
    </>
  );
};

export default CharList;
