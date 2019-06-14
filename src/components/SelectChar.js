import React, { useState, useEffect } from "react";
import { GetStarWars } from "../services/getStarWars";
const SelectChar = props => {
  let deneme = null;
  const [isLoading, fetchedData] = GetStarWars(
    "https://swapi.co/api/people",
    []
  );

  console.log("selectChar");
  let content = "Loading charecters ..";
  if (!isLoading && fetchedData && fetchedData.length > 0) {
    content = (
      <select
        className="selectChar"
        onChange={e => props.selectCharFunc(e.target.value)}
      >
        {fetchedData.map(data => (
          <option key={data.name}>{data.name}</option>
        ))}
      </select>
    );
  } else if (!isLoading && (!fetchedData || fetchedData.length === 0)) {
    content = "no fetched any charecter";
  }
  return content;
};
export default SelectChar;
