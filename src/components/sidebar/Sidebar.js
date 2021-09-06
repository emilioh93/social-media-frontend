import "./Sidebar.css";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ChatIcon from "@material-ui/icons/Chat";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import GroupIcon from "@material-ui/icons/Group";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import HelpIcon from "@material-ui/icons/Help";
import WorkIcon from "@material-ui/icons/Work";
import EventIcon from "@material-ui/icons/Event";
import SchoolIcon from "@material-ui/icons/School";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon"></RssFeedIcon>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon"></ChatIcon>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledIcon className="sidebarIcon"></PlayCircleFilledIcon>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupIcon className="sidebarIcon"></GroupIcon>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarIcon"></BookmarkIcon>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpIcon className="sidebarIcon"></HelpIcon>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon className="sidebarIcon"></WorkIcon>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventIcon className="sidebarIcon"></EventIcon>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon"></SchoolIcon>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButtom">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              className="sidebarFriendImg"
              alt=""
            />
            <span className="sidebarFriendName">Emilio Hurtado</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              className="sidebarFriendImg"
              alt=""
            />
            <span className="sidebarFriendName">Emilio Hurtado</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              className="sidebarFriendImg"
              alt=""
            />
            <span className="sidebarFriendName">Emilio Hurtado</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              className="sidebarFriendImg"
              alt=""
            />
            <span className="sidebarFriendName">Emilio Hurtado</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              className="sidebarFriendImg"
              alt=""
            />
            <span className="sidebarFriendName">Emilio Hurtado</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              className="sidebarFriendImg"
              alt=""
            />
            <span className="sidebarFriendName">Emilio Hurtado</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
