import ImageSlider from "../slider1/ImageSlider";
import defaultSuggest from "../../images/default/defaultSuggest.jpg";
import "./Feed.css";
import SliderSlick from "../slider2/SliderSlick"
import Catology from "../catology/Catology";
import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Context} from "../../context/Context";
import {
    CardBodySuggest,
    CardImageSuggest,
    CardImageWrapperSuggest,
    CardSuggest,
    ContentSuggest,
    ItemSuggest, LazyLoadWrapper,
    SuggestContainer,
    TittleSuggest
} from "./styled";

export default function Feed({ username }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [posts, setPosts] = useState([]);
    const { user } = useContext(Context);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:8800/api/post/suggest-posts/" + user._id);
            setPosts(res.data);
        };
        fetchPosts();
    }, [username, user._id]);
    console.log(posts)

  return (
    <div className="feed">
      <div className="feedWrapper">
          <SliderSlick/>
          <ImageSlider/>
          <SuggestContainer>
              <TittleSuggest>
                  <h2>
                      Có thể bạn sẽ thích !
                  </h2>
              </TittleSuggest>
              <hr className="sidebarHr" />
              <ContentSuggest>
                  {posts.map(item => {
                      const listUrl = item.img && item.img.map((img) => PF + img);
                      console.log(item)
                      console.log('listUrl', listUrl)
                      return(
                          <ItemSuggest>
                            <a href={`/searchRestaurant/${item._id}`}>
                                <CardSuggest>
                                    <CardImageSuggest>
                                        <CardImageWrapperSuggest>
                                            <LazyLoadWrapper>
                                                <img src={listUrl[0] || defaultSuggest} alt={item.title}/>
                                            </LazyLoadWrapper>
                                        </CardImageWrapperSuggest>
                                    </CardImageSuggest>
                                    <CardBodySuggest>
                                        <h3>{item.title}</h3>
                                        <div>{item.place}</div>
                                    </CardBodySuggest>
                                </CardSuggest>
                            </a>
                          </ItemSuggest>
                  )})}
              </ContentSuggest>
          </SuggestContainer>
          <Catology/>
      </div>
    </div>
  );
}