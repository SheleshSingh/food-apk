import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const PopulelSilaider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s"
      );
      const dataFecth = await api.json();
      // console.log(dataFecth.meals);
      setData(dataFecth.meals);
    };
    fetchData();
  }, []);

  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <div
        style={{
          height: "50vh",
          width: "90%",
          margin: "auto",
        }}
      >
        <Slider {...settings} style={{ margin: "1rem" }}>
          {data.map((item) => {
            return (
              <>
                <Link to={`/${item.idMeal}`} key={item.idMeal}>
                  <div className="slider">
                    <img
                      src={item.strMealThumb}
                      alt=""
                      style={{ width: "18rem", height: "16rem" }}
                    />
                  </div>
                </Link>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default PopulelSilaider;
