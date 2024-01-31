import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SliderSlick.css";
import { useState } from "react";
import { SliderSlickData } from "./SliderSlickData";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function SliderSlick() {
  const navigate = useNavigate();

  const handleDetailClick = (kv, value) => {
    navigate(`/searchpage/${kv}/${value}`);
  };
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="sliderslick">
      <span className="titleslider">Khu vực Hà Nội</span>
      <hr className="sidebarHr" />
      <Slider {...settings}>
        {SliderSlickData.map((slide, idx) => (
          <div
            className={
              idx === imageIndex ? "slideslick activeSlideSlick" : "slideslick"
            }
            onClick={() => handleDetailClick('kv', slide.value)}
          >
            <img src={slide.image} alt="travel" />
            <div>{slide.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
