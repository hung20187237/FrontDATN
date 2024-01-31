import React, { useState } from "react";
import { SliderData } from "./data";
import "./imageSlider.css";
import Slider from "react-slick";
import BasicRating from "../star/star";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const PostSuggest = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const navigate = useNavigate();

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
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handleDetailClick = (value) => {
    console.log(value);
  };

  return (
    <div className="slider">
      <span className="titleslider">có thể bạn sẽ thích ?</span>
      <hr className="sidebarHr" />
      <Slider {...settings}>
        {SliderData.map((item) => {
          return (
            <div
              className="cardCatology"
              onClick={() => handleDetailClick(item.value)}
            >
              <img
                className="rightbarPlaceImg"
                src={PF + item.img[0]}
                alt={item.title}
              />
              <div>
                <span className="rightbarPlaceName">{item.title}</span>
                <span className="rightbarPlaceLocation">{item.place}</span>
                <div>
                  <BasicRating rating={item.rating || 4} />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PostSuggest;
