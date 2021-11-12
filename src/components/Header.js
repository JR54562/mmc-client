import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
    return (
        <div className="header">
            <h1>My Music Collection</h1>
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" data-bs-toggle="tab" href="#home">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#profile">Profile</a>
  </li>
  </ul>

        </div>
    )
}