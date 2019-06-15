import React from "react";
import { GetStarWars } from "../services/getStarWars";
import SelectGender from "./SelectGender";
const CardChar = props => {
  const [isLoading, fetchedData] = GetStarWars(
    "https://swapi.co/api/people/" + props.selectedChar,
    [props.selectedChar]
  );
  let context = null;
  if (fetchedData) {
    context = (
      <div className="CardChar">
        <div>Height: {fetchedData.height}</div>
        <div>Hair Color: {fetchedData.hair_color}</div>
        <div>Eye Color: {fetchedData.eye_color}</div>
        <SelectGender fetchedData={fetchedData} />
      </div>
    );
  } else if (!isLoading && !fetchedData) {
    context = <div>error fetced selected char</div>;
  } else if (isLoading) {
    context = <div>Loadingggg</div>;
  }

  return context;
};
export default React.memo(CardChar);
