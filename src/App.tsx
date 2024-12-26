import React, { useState } from "react";
import "./App.css";
const CharList = () => {
  const [chars, setChars] = useState([
    "t",
    "h",
    "e",
    " ",
    "q",
    "u",
    "i",
    "c",
    "k",
    " ",
    "b",
    "r",
    "o",
    "w",
    "n",
    " ",
    "f",
    "o",
    "x",
    " ",
    "j",
    "u",
    "m",
    "p",
    "s",
    " ",
    "o",
    "v",
    "e",
    "r",
    " ",
    "t",
    "h",
    "e",
    " ",
    "l",
    "a",
    "d",
    "y",
    " ",
    "d",
    "o",
    "g",
    ".",
  ]);

  return (
    <div className="container">
      <textarea className="block block1" readOnly>
        The quick brown fox jumps over the lady dog
      </textarea>
      <textarea className="block block2"></textarea>
    </div>
  );
};

export default CharList;
s;
