import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" data-bs-toggle="tab" href="/">
            Home
          </a>
        </li>
      </ul>
      <div className="name">
        <h1>My Movies Collection</h1>
      </div>
    </div>
  );
}
