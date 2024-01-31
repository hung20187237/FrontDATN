import "./ClosePlace.css";
import BasicRating from "../star/star";
import { useNavigate } from "react-router-dom";
import {TextItem} from "../../pages/searchRestaurant/Component/Post/styles";
import {Rate} from "antd";
import React from "react";
import Box from "@mui/material/Box";

export default function ClosePlace({ post }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  let navigate = useNavigate();

  const scores = {
    1: "Useless",
    2: "Poor",
    3: "Ok",
    4: "Good",
    5: "Excellent",
  };
  const calculateAverage = obj => {
    let sum = 0;
    let count = 0;

    for (let key in obj) {
      sum += obj[key];
      count++;
    }
    return count === 0 ? 0 : sum / count;
  };

  const handleClickSearch = async (value) => {
    navigate(`/searchPost/${value}`);
  };
  return (
    <li className="rightbarPlace" onClick={() => {
      handleClickSearch(post._id)
    }}>
      <img
        className="rightbarPlaceImg"
        src={PF + post.img[0]}
        alt={post.title}
      />
      <div>
        <span className="rightbarPlaceName">{post.title}</span>
        <span className="rightbarPlaceLocation">{post.place}</span>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <TextItem>{calculateAverage(post.rating)}</TextItem>
          <Rate allowHalf disabled  defaultValue={calculateAverage(post.rating)} style={{ fontSize: "24px" }}/>
          <Box sx={{ ml: 2 }}>{scores[Math.floor(calculateAverage(post.rating))]}</Box>
        </div>
      </div>
    </li>
  );
}
