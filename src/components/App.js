import React, { useState, useEffect } from "react";
import SelectChar from "./SelectChar";
import "../css/App.css";
import CardChar from "./CardChar";
import SelectGender from "./SelectGender";
import getStarWars from "../services/getStarWars";

const App = props => {
  const [selectedChar, setSelectedChar] = useState("Luke Skywalker");
  const selectCharFunc = char => {
    setSelectedChar(char);
  };
  console.log("app");

  return (
    <React.Fragment className="App">
      <SelectChar selectCharFunc={selectCharFunc} />
      <CardChar />
      <SelectGender />
    </React.Fragment>
  );
};
export default App;
