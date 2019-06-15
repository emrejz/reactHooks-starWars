import React, { useState } from "react";
const SelectGender = props => {
  let [context, setContext] = useState(null);

  const onSubmit = e => {
    e.preventDefault();
    let isChecked = document.querySelector("input[name=gender]:checked");
    if (!isChecked) {
      setContext(0);
    } else {
      if (isChecked.value === props.fetchedData.gender) {
        setContext(1);
      } else {
        setContext(2);
      }
    }
  };

  return (
    <div>
      <form onSubmit={e => onSubmit(e)} className="SelectGender">
        <input type="radio" name="gender" value="female" />
        <label>female</label>
        <input type="radio" name="gender" value="male" />
        <label>male</label>
        <input type="radio" name="gender" value="n/a" />
        <label>n/a</label>
        <button type="submit">
          is <span className="btnTrue">True</span> or
          <span className="btnFalse"> False</span>
        </button>
      </form>
      <div className="showMessage">
        {context === 0 && (
          <div style={{ color: "red" }}>Select one, guess the gender</div>
        )}
        {context === 1 && (
          <div style={{ color: "green" }}>Congratulations geek</div>
        )}
        {context === 2 && (
          <div style={{ color: "darkorange" }}>Where is ur mind nerd</div>
        )}
      </div>
    </div>
  );
};
export default React.memo(SelectGender);
