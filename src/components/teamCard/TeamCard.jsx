import "./teamCard.css";
import { members } from "../../data.js";

export default function TeamCard() {
  return (
    <div className="teams-container">
      {members.map((member, key) => {
        return (
          <div key={key} className="team-card">
            <div className="team-img-container">
              <img src={member.img} alt="" className="member-img" />
            </div>
            <div className="info">
              <h3 className="name">{member.name}</h3>
              <h4 className="position">{member.position}</h4>
              <p className="description">{member.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
