import React, { useState, useEffect } from "react";
import SelectChar from "./SelectChar";
import "../css/App.css";
import CardChar from "./CardChar";
import SelectGender from "./SelectGender";
import getStarWars from "../services/getStarWars";

const App = props => {
  const [selectedChar, setSelectedChar] = useState(1);
  const selectCharFunc = char => {
    setSelectedChar(char);
  };
  console.log("app");

  return (
    <div className="App">
      <SelectChar selectCharFunc={selectCharFunc} />
      <CardChar selectedChar={selectedChar} />
      <SelectGender />
    </div>
  );
};
export default App;
