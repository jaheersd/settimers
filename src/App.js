/* conditional rendering puzzle: build a react component that renders "hello world",initially. 
   after 5 seconds change the text to "good bye world" without using any external state management libraries 
   or timers
*/
import React, { useState, useEffect } from "react";

const Puzzle = () => {
  const [message, setMessage] = useState("hello world");
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("good bye");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <h1>message: {message}</h1>
    </div>
  );
};

export default Puzzle;
