import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import TrendingSlider from "./TrendingSlider";

const Category = () => {
  const { name } = useParams();
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
      );
      const data = await api.json();
      setCategoryData(data.meals);
      // console.log(data.meals);
    };
    fetchData();
  }, [name]);

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
        {categoryData.map((item) => {
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

export default Category;
