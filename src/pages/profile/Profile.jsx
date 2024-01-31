import "./Profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Post from "../../components/post/Post";

export default function Profile({socket}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState();
  const username = useParams().username;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:8800/api/user?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:8800/api/post/profile/" + username)
        
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username]);

  return (
    <>
      <Topbar socket={socket}/>
      {user?
      <div className="profile">
        <Sidebar socket={socket}/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.background
                    ? PF + user.background
                    : PF + "person/noCover.png"
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  user.avatar
                    ? PF + user.avatar
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
          <div className="bodypostProfile">
            {posts.map((p) => {
                return (
                <Post key={p._id} post={p} user1 = {user} socket={socket}/>
                )
            })}
          </div>
            <Rightbar user={user} />
          </div>
        </div>
      </div>:null}
    </>
  );
}