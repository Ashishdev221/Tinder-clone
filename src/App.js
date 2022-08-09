import React from "react";
import './App.css';
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/chat/:person" element={[<Header backButton="/chat" />,<ChatScreen/>]} />
          <Route path="/chat" element={[<Header backButton='/' />,<Chats/>]} />
          <Route path="/" element={[<Header />, <TinderCards />, <SwipeButtons />]} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
