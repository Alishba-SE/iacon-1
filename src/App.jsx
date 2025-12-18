<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Registration from "./components/Registration";
import ProfilePage from "./components/Stdprofilepage";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("profile");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div
      className={`app-container ${
        isLoggedIn ? "sidebar-active" : "no-sidebar"
      }`}
    >
      {/* Sidebar appears only after login */}
      {isLoggedIn && (
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
      )}

      {/* Main Content Area */}
      <div className={`content ${!isLoggedIn ? "full-screen" : ""}`}>
        {/* Registration Page (Full Screen) */}
        {!isLoggedIn && <Registration onLogin={handleLogin} />}

        {/* Profile Page after login */}
        {isLoggedIn && activePage === "profile" && <ProfilePage />}
      </div>
    </div>
  );
}

export default App;
>>>>>>> 65b2e1b6603d2877eb01666ae2c31eb0f0464374
