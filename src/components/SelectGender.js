import React from "react";
export class SelectGender extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="SelectGender">
        <input type="radio" name="sec" value="male" />
        <label>male</label>
        <input type="radio" name="sec" value="female" />
        <label>male</label>
        <input type="radio" name="sec" value="n/a" />
        <label>male</label>
        <button>
          is <span className="btnTrue">True</span> or
          <span className="btnFalse"> False</span>
        </button>
      </div>
    );
  }
}
