import React, { useRef, useState } from "react";
import "./App.css";
const CharList = () => {
  const [paragraph, setParagraph] = useState(
    "The quick Brown fox jumps over the lazy dog."
  );
  const spanRefs = useRef<any>([]);
  const inputRef = useRef("");
  console.log(spanRefs); //will show in rerender(by refresh)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //why setTimeout as on key down this fxn was rendering so inital value setting as nothing
    setTimeout(() => {
      console.log(
        "Current Value After KeyDown:",
        inputRef.current,
        spanRefs.current[inputRef.current.length - 1].textContent,
        inputRef.current.length
        //check the the value of span with id 0 at length of 1
      );
      if (e.key === spanRefs.current[inputRef.current.length - 1].textContent) {
        console.log(true);
        spanRefs.current[inputRef.current.length - 1].style.color = "green";
      } else {
        spanRefs.current[inputRef.current.length - 1].style.color = "red";
      }
    }, 0);
  };
  return (
    <>
      {paragraph.split("").map((char, index) => (
        <span
          key={index}
          id={`${index}`}
          ref={(el) => (spanRefs.current[index] = el)}
        >
          {char}
        </span>
      ))}
      <input
        type="text"
        placeholder="Hidden Input"
        onChange={(e) => (inputRef.current = e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default CharList;

// setTimeout with 0ms ensures inputRef.current is updated after React processes the onChange event.
//for getting text content to be used

//DOUBT : why the ui is changing , when i manupulate the dom with the useref - even if there is no use effect

//TODo -
//1. handle the edge case
//after typing ends - still checking the length so type error is there,
//on shift press the length i
//2. hide the input box
//3.

//what help i took from gpt
//1. input box checkling length and using useRef to reference the the element(but that thought that i have to somehow do this is mine thought(may be learnt from somewhere))
