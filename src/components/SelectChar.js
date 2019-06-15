import React from "react";
import { GetStarWars } from "../services/getStarWars";
const SelectChar = props => {
  let [isLoading, fetchedData] = GetStarWars("https://swapi.co/api/people", []);
  if (fetchedData) {
    fetchedData = fetchedData.results;
  }
  let content = "Loading charecters ..";
  if (!isLoading && fetchedData && fetchedData.length > 0) {
    content = (
      <select
        className="selectChar"
        onChange={e => props.selectCharFunc(e.target.value)}
      >
        {fetchedData.map((data, index) => (
          <option value={index + 1} key={index + 1}>
            {data.name}
          </option>
        ))}
      </select>
    );
  } else if (!isLoading && (!fetchedData || fetchedData.length === 0)) {
    content = "no fetched any charecter";
  }
  return content;
};
export default React.memo(SelectChar);
