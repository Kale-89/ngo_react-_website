import "./ourTeam.css";
import TeamCard from "../../components/teamCard/TeamCard";

export default function OurTeam() {
  return (
    <div className="our-team">
      <img src="assets/groups.jpg" alt="" className="team-image" />
      <TeamCard />
    </div>
  );
}
