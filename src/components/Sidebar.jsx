import React from "react";
import "./Sidebar.css";

const Sidebar = ({ setActivePage, activePage }) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">IACON </h2>
      <ul>
        <li
          className={activePage === "profile" ? "active" : ""}
          onClick={() => setActivePage("profile")}
        >
          Profile
        </li>
        <li onClick={() => alert("Other pages coming soon!")}>Internship</li>
        <li onClick={() => alert("Other pages coming soon!")}>Project</li>
        <li onClick={() => alert("Other pages coming soon!")}>Feedback</li>
      </ul>
    </div>
  );
};

export default Sidebar;