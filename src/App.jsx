import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {useContext, useEffect, useRef} from "react";
import { Context } from "./context/Context";
import Review from "./pages/review/Review";
import Newfeed from "./pages/newfeed/Newfeed";
import SearchPage from "./pages/searchpage/SearchPage";
import SearchPost from "./pages/searchpost/SearchPost";
import SearchRes from "./pages/searchRestaurant/SearchRes";
import UserManagement from "./pages/AdminManagement/index";
import { io } from "socket.io-client";

function App() {
  const socket = useRef()
  const { user } = useContext(Context);

  useEffect(() => {
    socket.current = io("http://localhost:8900");
    socket.current.emit("addUser", user?._id);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home socket={socket} /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={user ? <Profile socket={socket}/> : <Login/>}/>
        <Route path="/messenger" element={user ? <Messenger /> : <Login/>}/>
        <Route path="/review" element={<Review socket={socket}/>} />
        <Route path="/newfeed" element={<Newfeed socket={socket}/>} />
        <Route path="/searchpage/:value/:id" element={<SearchPage socket={socket}/>} />
        <Route path="/searchPost/:postid" element={<SearchPost socket={socket}/>} />
        <Route path="/searchRestaurant/:resId" element={<SearchRes socket={socket}/>} />
        <Route path="/adminManagement" element={<UserManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
