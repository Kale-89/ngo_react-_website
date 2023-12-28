import { useState } from "react";
import "./areas.css";

export default function Areas() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const values = [
    {
      id: "1",
      img: "assets/elderly.jpg",
      title: "Supporting Poor Women & Unemployed Youth",
      desc: "  we help out poor women, elderly people and unemployed youth in income generating activities with Micro-creadit access, revolving fund and job creation.",
    },

    {
      id: "2",
      img: "assets/Rural-Development.jpg",
      title: "Water, hygiene & Sanitation",
      desc: "we have various projects that are designed to develop rural areas in order to give access to thouse who have difficulties in order to get basic needs such as clean water, electricity, and medical help.",
    },
    {
      id: "3",
      img: "assets/childrens.jpg",
      title: "Supporting Children",
      desc: "we help children and students who are strrugling to continue there studies because of financial difficulties",
    },

    {
      id: "4",
      img: "assets/elderly.jpg",
      title: "Supporting Poor Women & Unemployed Youth",
      desc: "  we help out poor women, elderly people and unemployed youth in income generating activities with Micro-creadit access, revolving fund and job creation.",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 0)
      : setCurrentSlide(
          currentSlide < values.length - 1 ? currentSlide + 1 : 0
        );
  };
  return (
    <div className="areas" id="areas">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {values.map((itmes, key) => {
          return (
            <div key={key} className="container">
              <div className="items">
                <div className="left">
                  <div className="image-container">
                    <img className="image" src={itmes.img} alt="" />
                  </div>
                </div>
                <div className="right">
                  <div className="discription">
                    <h3>{itmes.title}</h3>
                    <p>{itmes.desc}</p>
                    <button className="visit">GO & VISIT</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="arrow-container">
        <img
          src="assets/arrow.png"
          className="arrow left"
          alt=""
          onClick={() => handleClick("left")}
        />
      </div>
      <div className="arrow-container">
        <img
          src="assets/arrow.png"
          className="arrow right"
          alt=""
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
