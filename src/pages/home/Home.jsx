import React from "react";
import "./home.css";
import ProjectCard from "../../components/projectCard/ProjectCard";
import Areas from "../../components/areas/Areas";
import UpcomingEventCard from "../../components/eventCard/UpcomingEventCard";
import { Link } from "react-router-dom";
export default function Home() {
  const projects = [
    {
      quantity: "+180",
      type: "Childeren Supported",
    },

    {
      quantity: "+50",
      type: "Water Supply Installed for rural areas",
    },

    {
      quantity: "+70",
      type: "Women & Elderly Supported",
    },
  ];
  return (
    <div className="home">
      <div className="intro">
        <img
          className="main-image"
          src="assets/Website Homepage Picture.png"
          alt=""
        />
        <div className="title">
          <div className="words fs-1 text-center ">
            Wogen Children & Mothers Support Organization
          </div>
          <div className="words fs-3 text-center ">
            ወገን የህጻናት እና የእናቶች መርጃ ማህበር
          </div>
        </div>
      </div>
      <div className="goal">
        <div className="description">
          <h5 className="goal-title">OUR GOAL </h5>
          <h4 className="catch">
            About 35 million people live in poverty in Ethiopia thats about 44%
            of the current population, our Organisation is on a mission to
            change that.
          </h4>
          <h5 className="goal-discription">
            We belive with hard work and coopration with various Organisations
            and voluntary supporters localy and world wide it is posible to
            change the current matter to make it better.in our quest to make
            this goal a reality we have different projects running that cover a
            wide range of areas such as:
          </h5>
        </div>
        <div className="projects">
          {projects.map((project, key) => (
            <ProjectCard
              key={key}
              quantity={project.quantity}
              type={project.type}
            />
          ))}
        </div>
      </div>
      <div className="main-areas">
        <h5 className="goal-title">WHAT WE DO </h5>
        <Areas />
      </div>
      <div className="upcoming">
        <h5 className="goal-title">COME AND BE PART OF OUR EVENTS </h5>
        <UpcomingEventCard />
        <button className="e-btn">
          <Link className="link" to="/events">
            JOIN THE EVENT!
          </Link>
        </button>
      </div>
    </div>
  );
}
