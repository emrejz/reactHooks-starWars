import React, { useState } from "react";
import SelectChar from "./SelectChar";
import "../css/App.css";
import CardChar from "./CardChar";

const App = props => {
  const [selectedChar, setSelectedChar] = useState(1);
  const selectCharFunc = char => {
    setSelectedChar(char);
  };

  return (
    <div className="App">
      <SelectChar selectCharFunc={selectCharFunc} />
      <CardChar selectedChar={selectedChar} />
    </div>
  );
};
export default App;
