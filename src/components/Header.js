import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" data-bs-toggle="tab" href="#home">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#profile">
            Profile
          </a>
        </li>
      </ul>
      <div className="name">
          <h1>My Movies Collection</h1>
          </div>
    </div>
  );
}
