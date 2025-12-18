import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Registration from "./components/Registration";
import ProfilePage from "./components/Stdprofilepage";
import "./App.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("profile");

  const handleLogin = () => setIsLoggedIn(true);

  return (
    <div className={`app-container ${isLoggedIn ? "sidebar-active" : "no-sidebar"}`}>
      {isLoggedIn && (
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
      )}

      <div className={`content ${!isLoggedIn ? "full-screen" : ""}`}>
        {!isLoggedIn && <Registration onLogin={handleLogin} />}
        {isLoggedIn && activePage === "profile" && <ProfilePage />}
      </div>
    </div>
  );
}
