import React from "react";
import "./App.css";
import UserRegistration from "./Components/Users/UserRegistration";
import Login from "./Components/Users/Login";

function App() {
  return (
    <div className="App">
      <h1>Gracious Givers App</h1>
      <UserRegistration />
      <Login />
    </div>
  );
}

export default App;
