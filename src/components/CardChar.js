import React from "react";
const CardChar = props => {
  console.log("card char");

  return (
    <div className="CardChar">
      <h2>Name:</h2>
      <div>Height:</div>
      <div>Hair Color:</div>
      <div>Eye Color:</div>
    </div>
  );
};
export default React.memo(CardChar);
