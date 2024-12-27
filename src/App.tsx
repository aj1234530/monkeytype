import React, { useRef, useState } from "react";
import "./App.css";
const CharList = () => {
  const [paragraph, setParagraph] = useState(
    "The quick brown fox jumps over the lazy dog"
  );
  const [typingStarted, setTypingStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const typingStats = useRef({ startTime: 0, endTime: 0, wpm: 0 }); //using this so that it does not rerender when the we set the start time
  const spanRefs = useRef<any>([]);
  const inputRef = useRef("");
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //recording date.now on first key press
    if (!typingStarted) {
      typingStats.current.startTime = Date.now();
    }
    setTypingStarted(true);

    //why setTimeout as on key down this fxn was rendering so inital value  of input was setting as nothing
    if (inputRef.current.length === spanRefs.current.length) {
      typingStats.current.endTime = Date.now();
      typingStats.current.wpm = calculateWPM(
        typingStats.current.endTime - typingStats.current.startTime,
        paragraph.split(" ").length
      ); //using jit(just in time compilation)
      console.log("ran the fxn");
      setGameEnded(true);
    }
    setTimeout(() => {
      //check if this is (after last) char()

      console.log(
        "Current Value After KeyDown:",
        inputRef.current,
        spanRefs.current[inputRef.current.length - 1].textContent,
        inputRef.current.length
        //check the the value of span with id 0 at length of 1
      );

      if (e.key === spanRefs.current[inputRef.current.length - 1].textContent) {
        spanRefs.current[inputRef.current.length - 1].style.color = "green";
      } else {
        spanRefs.current[inputRef.current.length - 1].style.color = "red";
      }
      //cursor logic by getBoundingClient'
      //gettht the positio of span el wrt to the document viewport

      const rect =
        spanRefs.current[inputRef.current.length - 1].getBoundingClientRect();
      //getting the width of chars in the span el
      const widhtofChar =
        spanRefs.current[inputRef.current.length - 1].getBoundingClientRect()
          .width;
      setCursorPosition({
        x: rect.left + widhtofChar,
        y: rect.top,
      });
      console.log(rect);
      console.log(widhtofChar);
    }, 0);
  };

  return (
    <>
      {typingStarted && (
        <div
          style={{
            position: "absolute",
            top: `${cursorPosition.y}px`,
            left: `${cursorPosition.x}px`,
            width: "2px",
            height: "20px",
            backgroundColor: "#0000ff",
            // default , cursor is hidden
            // display: "none",
          }}
        ></div>
      )}
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
      {/* on game the only this block runs or after this also runs? */}
      {gameEnded && (
        <div
          style={{
            height: "100vh",
            position: "relative",
            backgroundColor: "wheat",
          }}
        >
          <div>{typingStats.current.wpm}</div>
          <button style={{}} onClick={() => location.reload()}>
            Restart Game
          </button>
        </div>
      )}
    </>
  );
};

export default CharList;

function calculateWPM(milliseconsEllapsed: number, noOfWords: number): number {
  const minutesElaspsed = milliseconsEllapsed / 1000 / 60;
  console.log(minutesElaspsed);
  const wpm = Math.floor(noOfWords / minutesElaspsed);
  console.log(wpm);
  console.log("no fo words", noOfWords);
  return wpm;
}

// setTimeout with 0ms ensures inputRef.current is updated after React processes the onChange event.
//for getting text content to be used

//DOUBT : why the ui is changing , when i manupulate the dom with the useref - even if there is no use effect

//TODo -
//1. handle the edge case
//after typing ends - still checking the length so type error is there,
//on shift
//2. hide the input box

//3.he

//what help i took from gpt
//1. input box checkling length and using useRef to reference the the element(but that thought that i have to somehow do this is mine thought(may be learnt from somewhere))

//learnings
//1. manupulating dom with useRef
//2. useRef return object with single property current(we can reference anything to this prop eg - array, string)
//3.Work of cursor
// Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
//using div to impersonate a cursor

//improvements
//1. maintain started state if on - focus on the input, and show the cursor on the first span element
//2. end of game - track
//2. typing speed
//
