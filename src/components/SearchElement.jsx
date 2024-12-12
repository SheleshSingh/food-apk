import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TrendingSlider from "./TrendingSlider";
import { Link, useParams } from "react-router-dom";

const SearchElement = () => {
  const { searchTerm } = useParams();
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await api.json();
      //   console.log(data.meals);
      setSearch(data.meals);
    };
    fetchData();
  }, [searchTerm]);
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
          gridGap: "1rem",
          marginTop: "2rem",
        }}
      >
        {search.map((item) => {
          return (
            <Link to={`/${item.idMeal}`} className="link">
              <div key={item.idMeal} style={{ textAlign: "center" }}>
                <div className="img">
                  <img
                    src={item.strMealThumb}
                    alt=""
                    style={{ width: "13rem" }}
                  />
                </div>
                <h5 style={{ marginTop: "1rem" }}>{item.strMeal}</h5>
              </div>
            </Link>
          );
        })}
      </div>
      <TrendingSlider />
    </>
  );
};

export default SearchElement;
