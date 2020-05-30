import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div class="play">
      <img src="img/logo.png" id="logo" alt="logo" />
      <h1>One Piece Quiz</h1>
      <Link to="/quiz">
        <button>Lets Play</button>
      </Link>
    </div>
  );
}
