import React from "react";
import "./event.css";
import MainEventCard from "../../components/eventCard/MainEventCard";

export default function Event() {
  return (
    <div className="eventPageContainer">
      <div className="event-type">
        <h5 className="ev-title">CURRENT EVENTS</h5>
        <hr />
      </div>
      <MainEventCard />
      <div className="event-type">
        <h5 className="ev-title">UPCOMING EVENTS</h5>
        <hr />
        <h5>COMING SOON</h5>
      </div>
    </div>
  );
}
