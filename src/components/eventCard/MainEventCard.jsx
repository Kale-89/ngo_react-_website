import React from "react";
import "./events.css";
import { events } from "../../data";

export default function MainEventCard() {
  return (
    <div className="main-event-cont">
      {events.map((event, key) => {
        return (
          <div key={key} className="mainEventCard">
            <div className="image-container">
              <img src={event.img} alt="" className="event-img" />
            </div>
            <div className="desc-container">
              <h3 className="event-title">{event.title}</h3>
              <h5 className="date">{event.date}</h5>
              <p className="desc">{event.desc}</p>
            </div>
            <button className="event-card-btn">JOIN NOW</button>
          </div>
        );
      })}
    </div>
  );
}
