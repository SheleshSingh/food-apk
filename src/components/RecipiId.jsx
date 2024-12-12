import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TrendingSlider from "./TrendingSlider";
import { useParams } from "react-router-dom";

const RecipiId = () => {
  const { idMeal } = useParams();

  const [data, setData] = useState([]);
  const [active, setactive] = useState("ingredient");

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const dataFecth = await api.json();
      setData(dataFecth.meals[0]);
      console.log(dataFecth.meals);
    };
    fetchData();
  }, [idMeal]);
  return (
    <>
      <Navbar />

      <div
        style={{
          width: "90%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h1>{data.strMeal}</h1>
        <div
          style={{
            display: "flex",
            // justifyContent: "space-between",
            // alignItems: "center",
          }}
        >
          <div className="img">
            <img
              src={data.strMealThumb}
              alt=""
              style={{ width: "18rem", marginTop: "2rem" }}
            />
          </div>

          <div className="container">
            <button className="btn" onClick={() => setactive("ingredient")}>
              Ingredient
            </button>
            <button className="btn" onClick={() => setactive("instruction")}>
              Instruction
            </button>

            {active === "ingredient" ? (
              <div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {data.strIngredient1} - {data.strMeasure1}
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {data.strIngredient2} - {data.strMeasure2}
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {data.strIngredient3} - {data.strMeasure3}
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {data.strIngredient4} - {data.strMeasure4}
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {data.strIngredient5} - {data.strMeasure5}
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {data.strIngredient6} - {data.strMeasure6}
                </div>
              </div>
            ) : (
              <p>{data.strInstructions}</p>
            )}
          </div>
        </div>
      </div>
      <TrendingSlider />
    </>
  );
};

export default RecipiId;
