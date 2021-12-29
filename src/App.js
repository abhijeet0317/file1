import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const [length, setLength] = useState(0);
  const [word, setWord] = useState(0);
  const [limit, setLimit] = useState(50);
  const [font, setFont] = useState(16);

  const countCharacter = (e) => {
    return (
      setValue(e.target.value),
      setLength(e.target.value.length),
      setWord(e.target.value.split(" ").length)
    );
  };

  const limitChange = (e) => {
    return setLimit(e.target.value);
  };

  const fontSize = (e) => {
    return setFont(e.target.value);
  };
  return (
    <div className="App">
      <input
        type="range"
        min="16"
        max="32"
        step="1"
        id="fontSize-input"
        value={font}
        onChange={fontSize}
      />
      <br />
      <br />
      <label> Word limit input </label>
      <br />
      <input
        type="text"
        value={limit}
        id="char-limit-input"
        onChange={limitChange}
      />
      <br />
      <br />
      <textArea
        value={value}
        onChange={countCharacter}
        maxlength={limit}
        style={{ fontSize: `${font}px` }}
      />
      <br />
      <br />
      <div id="word-counter">Total number of words written {word} </div>
      <br />
      <br />
      <div id="char-counter">Total number of characters used {length} </div>
    </div>
  );
}
