import "./Sidebar.css";
import { useEffect, useState } from "react";
import CloseFriend from "../closeFriend/CloseFriend";
import axios from "axios";


export default function Sidebar({username, socket}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:8800/api/user/all/all/all/");
      setUsers( res.data);
    };
    fetchUsers();
  },[]);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sideText">
          <span>Người dùng tích cực</span>
        </div>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {users.slice(0, 5).map((u) => (
            <CloseFriend key={u.id} user={u} socket={socket}/>
          ))}
        </ul>
      </div>
    </div>
  );
  
}