// import React, { useEffect, useState } from "react";
import "./events.css";
import { events } from "../../data.js";

export default function UpcomingEventCard() {
  //   const [isHovering, setIsHovering] = useState(false);

  //   const handleMouseEnter = () => {
  //     setIsHovering(true);
  //   };

  //   const handleMouseLeave = () => {
  //     setIsHovering(false);
  //   };

  return (
    <div className="event-container">
      {events.map((event, key) => {
        return (
          <div key={key} className="event">
            <img className="e-image" src={event.img} alt="" />
            <div
              className="title-container"
              style={{
                // background: isHovering
                //   ? `${event.hoverColor}`
                //   : `${event.color}`,
                // transition: "all 1s ease",
                background: `${event.color}`,
              }}
              //   onMouseEnter={handleMouseEnter}
              //   onMouseLeave={handleMouseLeave}
            >
              <h3 className="e-title">{event.title}</h3>
              <div className="line"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
