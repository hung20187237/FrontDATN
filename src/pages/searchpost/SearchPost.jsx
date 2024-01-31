import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useEffect, useState } from "react";
import Rightbar from "../../components/rightbar/Rightbar";
import "./SearchPost.css";
import Post from "../../components/post/Post";
import { Context } from "../../context/Context";
import axios from "axios";
import { useParams } from "react-router";

export default function SearchPost({username, socket}) {
  const [posts, setPosts] = useState();
  const { user } = useContext(Context);
  const { postid } = useParams();
  console.log(postid);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:8800/api/post/" + postid);
      setPosts(res.data);
    };
    fetchPosts();
  }, [postid]);
  console.log(posts);
  return (
    <>
      <Topbar socket={socket}/>
      <div className="newfeedContainer">
        <Sidebar socket={socket}/>
        <div className="bodyNewFeed">
        {posts && <Post key={posts._id} post={posts} user1={user} socket={socket}/>}
        </div>
        <Rightbar />
      </div>
    </>
  );
}
