import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./Home.css"

export default function Home({socket}) {
  return (
    <>
      <Topbar socket={socket}/>
      <div className="homeContainer">
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}