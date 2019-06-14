import React from "react";
export class CardChar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="CardChar">
        <h2>Name:</h2>
        <div>Height:</div>
        <div>Hair Color:</div>
        <div>Eye Color:</div>
      </div>
    );
  }
}
