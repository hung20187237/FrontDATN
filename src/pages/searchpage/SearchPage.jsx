import React from "react";
import Topbar from "../../components/topbar/Topbar";
import "./SearchPage.css";
import { SliderData } from "../../components/slider1/SliderData";
import { SliderSlickData } from "../../components/slider2/SliderSlickData";
import { CatologyData } from "../../components/catology/CatologyData";
import { useContext, useEffect, useState, useRef } from "react";
import Post from "../../components/post/Post";
import { Context } from "../../context/Context";
import axios from "axios";
import MultiSelectFloat from "../../components/FloatingLabel/MultiSelectFloat";
import { Space } from "antd";
import { useParams } from "react-router-dom";

export default function SearchPage({ filter, data, socket }) {
  const [filterValue, setFilterValue] = useState({ kv: [], tc: [], dm: [] });
  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState([]);
  const { user } = useContext(Context);
  const { id, value } = useParams();

  useEffect(() => {
    setFilterValue({ ...filterValue, [value]: [id] });
  }, [id, value]);
  console.log(filterValue);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "http://localhost:8800/api/post/timeline/" + user._id
      );
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [user._id]);

  useEffect(() => {
    setShowPosts(posts);
  }, [posts]);

  useEffect(() => {
    let result = posts;

    if (filterValue.kv.length !== 0) {
      result = result.filter((p) => filterValue.kv.includes(p.tagkv));
    }
    console.log(result);
    if (filterValue.tc.length !== 0) {
      result = result.filter((p) => filterValue.tc.includes(p.tagtc));
    }
    console.log(result);
    if (filterValue.dm.length !== 0) {
      result = result.filter((p) => filterValue.dm.includes(p.tagdm));
    }
    setShowPosts(result);
  }, [filterValue, posts]);

  const SearchSidebar = () => {
    return (
      <div className="searchsidebar">
        <div className="searchsidebarWrapper">
          <div className="searchsideText">
            <span>Lọc kết quả</span>
          </div>
          <hr className="searchsidebarHr" />
        </div>
        <Space
          direction="vertical"
          style={{ width: "100%", padding: "0 20px" }}
          size={16}
        >
          <MultiSelectFloat
            dataSelect={SliderSlickData}
            label={"Khu vực"}
            valueSelect={filterValue.kv}
            onChangeSelect={(value) => {
              setFilterValue({ ...filterValue, kv: value });
            }}
          />
          <MultiSelectFloat
            dataSelect={SliderData}
            label={"Tiêu chí"}
            valueSelect={filterValue.tc}
            onChangeSelect={(value) => {
              setFilterValue({ ...filterValue, tc: value });
            }}
          />
          <MultiSelectFloat
            dataSelect={CatologyData}
            label={"Thể loại"}
            valueSelect={filterValue.dm}
            onChangeSelect={(value) => {
              setFilterValue({ ...filterValue, dm: value });
            }}
          />
        </Space>
      </div>
    );
  };
  const SearchFeed = () => {
    return (
      <div className="bodysearchFeed">
        {showPosts.map((p, index) => {
          return <Post key={index} post={p} socket={socket}/>;
        })}
      </div>
    );
  };
  return (
    <>
      <Topbar socket={socket}/>
      <div className="searchContainer">
        <SearchSidebar />
        <SearchFeed />
      </div>
    </>
  );
}
