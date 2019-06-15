import { useState, useEffect } from "react";
import axios from "axios";

export const GetStarWars = (url, dep) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetcedData, setFetchedData] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then(res => {
        if (res.status !== 200) throw new Error("status no 200");
        return res.data;
      })
      .then(res => {
        setIsLoading(false);
        setFetchedData(res);
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  }, dep);
  return [isLoading, fetcedData];
};
