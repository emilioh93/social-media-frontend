import "./topbar.css";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="topbarLogo">Fakebook</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon"></SearchIcon>
          <input
            className="searchInput"
            placeholder="Buscar amigos, publicaciones o videos"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Inicio</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItems">
            <PersonIcon></PersonIcon>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
            <ChatIcon></ChatIcon>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
            <NotificationsIcon></NotificationsIcon>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img className="topbarImg" src="/assets/person/1.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Topbar;
