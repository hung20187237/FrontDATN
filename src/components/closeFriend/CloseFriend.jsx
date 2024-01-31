import "./CloseFriend.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from "axios";
import { useContext, useEffect, useState,useRef} from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";

export default function CloseFriend({user, socket}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [followed, setFollowed] = useState(false);
  const { user: currentUser, dispatch } = useContext(Context);
  const [newNotification, setNewNotification] = useState({});

  useEffect(() => { 
    if (currentUser && currentUser.followings.includes(user._id)) { 
      setFollowed(true);
    }
  }, [])

  useEffect(() => {
    socket.current?.on("getNotification", (data) => {
      setNewNotification({
        sendUserId: data.sendUserId,
        sendUserName: data.sendUserName,
        receiveUserId: data.receiveUserId,
        type: data.type,
        post: data.post,
        createdAt: data.timestamp
      })
    });
  }, [socket.current]);

  const handleClickFollowOrUnfollow = async () => {
    try {
      if (followed) {
        await axios.put(`http://localhost:8800/api/user/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
        setFollowed(false);
        socket.current?.emit("sendNotification", {
          sendUserName: currentUser.username,
          sendUserId: currentUser._id,
          receiveUserId: user._id,
          type:4
        });
      } else {
        await axios.put(`http://localhost:8800/api/user/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
        setFollowed(!followed);
        socket.current?.emit("sendNotification", {
          sendUserName: currentUser.username,
          sendUserId: currentUser._id,
          receiveUserId: user._id,
          type:7
        });
      }
    
    } catch (err) {
    }
  };

  return (
      <Link
        to={"/profile/" + user.username}
        style={{ textDecoration: "none" }}
      >
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src={PF+user.avatar} alt="" />
          <div>
            <span className="sidebarFriendName">{user.username}</span>
            <span className="sidebarFriendFollow">{user.usernumberpost}danh gia 
            {user.username !== currentUser.username && (
              <button className="buttonFollow1"  onClick={handleClickFollowOrUnfollow}>
                <RssFeedIcon/>
                {followed ? "Unfollow" : "Follow"} 
              </button>
            )}
            </span>
          </div>
        </li>
      
      </Link>
  );
}
