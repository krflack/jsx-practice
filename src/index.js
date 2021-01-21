import React from "react";
import ReactDOM from "react-dom";
import suggestedFriends from "./data.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Turn our Pseudocode into… JSX</h1>
      <p>add the JSX elements described in these pseudocode comments</p>
      <br />
      <main>
        <h2>People You May Know</h2>
        {/* don't worry about how this map function works quite yet...
          we will learn how this works in a few more lessons! */}
        {suggestedFriends.map((friend) => (
          <div className="card">
            <img class="picture" src={friend.picture} alt="user profile" />
            <div class="card-text">
              <h5 class="username">{friend.name}</h5>
              <span class="mutual-friends"> {friend.mutualFriendCount}</span>
              <div class="card-actions">
                <button class="primary">Add Friend</button>
                <button>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
