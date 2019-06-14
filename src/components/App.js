import React from "react";
import SelectChar from "./SelectChar";
import "../css/App.css";
import CardChar from "./CardChar";
import SelectGender from "./SelectGender";

const App = props => {
  return (
    <div className="App">
      <SelectChar />
      <CardChar />
      <SelectGender />
    </div>
  );
};
export default App;
