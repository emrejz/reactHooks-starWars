import React from "react";
import { GetStarWars } from "../services/getStarWars";
const CardChar = props => {
  const [isLoading, fetchedData] = GetStarWars(
    "https://swapi.co/api/people/" + props.selectedChar,
    [props.selectedChar]
  );
  console.log("card char");
  let context = <div>Loading selected char</div>;
  if (fetchedData) {
    context = (
      <div className="CardChar">
        <div>Height: {fetchedData.height}</div>
        <div>Hair Color: {fetchedData.hair_color}</div>
        <div>Eye Color: {fetchedData.eye_color}</div>
      </div>
    );
  } else {
    context = <div>error fetced selected char</div>;
  }
  return context;
};
export default React.memo(CardChar);
