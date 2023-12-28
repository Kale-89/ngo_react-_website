import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="left-menu">
        <div className="logo">
          <h2>Wogen</h2>
          <h4>Children and Mothers Support Organization</h4>
        </div>
      </div>
      <div className="right-menu">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/aboutUs">
              About Us
            </Link>
          </li>
          <li>
            <Link className="link" to="/ourTeam">
              Our Teams
            </Link>
          </li>

          <li>
            <Link className="link" to="/events">
              Events
            </Link>
          </li>

          <li>
            <Link className="link" to="/contactUs">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
