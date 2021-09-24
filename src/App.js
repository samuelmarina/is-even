import React, { useState } from "react";
import IsEven from "./IsEven";
import Icon from "./search-icon.svg";
import "./App.css";
const App = () => {
  const [inpData, setInpData] = useState("");
  const [result, setResult] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = IsEven(inpData);
    if (value == true) {
      setResult("Number is Even");
    } else if (value == false) {
      setResult("Number is not Even");
    }
    return;
  };
  return (
    <>
      <div className="container">
        <div className="image-container">
          <img src={Icon} alt="icon" />
        </div>
        <div className="search-input">
          <div className="search">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter any Number here"
                value={inpData}
                onChange={(e) => setInpData(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className="result-text">
          <h4>{result}</h4>
        </div>
      </div>
    </>
  );
};

export default App;
