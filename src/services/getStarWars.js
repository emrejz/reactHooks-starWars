import React, { useState, useEffect } from "react";

const getStarWars = (url, depen) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetcedData, setFetchedData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(res => {
        if (!res.ok) {
          setIsLoading(false);
          throw new Error("hata");
        }
        return res.result.json();
      })
      .then(res => {
        setIsLoading(false);
        setFetchedData(res);
      })
      .catch(err => {
        setIsLoading(false);
        throw new Error("swapi fetch error: ", err);
      });
  }, [depen]);
  return <div />;
};

export default [isLoading, fetcedData];
