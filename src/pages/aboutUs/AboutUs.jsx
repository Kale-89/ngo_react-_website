import React from "react";
import "./aboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="img-container">
        <img src="assets/groups.jpg" alt="" className="about-image" />
      </div>
      <div className="all-info">
        <div className="history">
          <h3 className="titles">OUR HISTORY</h3>
          <hr />
          <p>
            Wogen Children and Mothers Support organization is a National
            Non-Govermental Organization and non-profit making development
            organization, which started its operation in Ethiopia 2005 E.C, and
            is based in Gondar Ethiopia.
          </p>
          <p>
            Wogen has its organizational structure approved by federal charity
            and civic society’s agency. Under the boards members there are
            employed staffs like leaders/managers, officers/expertise for every
            respective projects and other supportive staffs
          </p>
          <p>
            The Word "Wogen" comes from the Amharic Language(Ethiopia’s official
            language) means "My People or kin" which we used to show our
            determination and willingness to help people in our commounity.
          </p>
        </div>

        <div className="mission">
          <h3 className="titles">OUR MISSIONS, VISIONS and VALUES</h3>
          <hr />
          <h3 className="subtitle">Mission</h3>
          <h4>
            Wogen Children and Mothers Support organization has set the
            following points as our mission
          </h4>
          <h5 style={{ color: "green" }}>
            To develop sustainable &integrated programs targeting OVC.
          </h5>
          <h5 style={{ color: "rgb(167, 167, 2)" }}>
            To access safe water supply & sanitation program to the rural
            community
          </h5>
          <h5 style={{ color: "red" }}>
            To strengthen economical & educational empowering of women
          </h5>
          <hr />
          <h3 className="subtitle">Visions</h3>
          <h4>
            to see the orphan and vulnerable children, and mothers are healthy,
            educated, productive, liable citizens of Ethiopia
          </h4>
        </div>
        <div className="values-container">
          <h3 className="subtitle">Values</h3>
          <div className="sub-container">
            <div className="values">
              <h4>Commitment</h4>
              <h4>Creativity</h4>
              <h4>Volunterism</h4>
              <h4>Co-operation</h4>
              <h4>Integrity</h4>
            </div>
            <div className="values">
              <h4>Transparency</h4>
              <h4>Honesty</h4>
              <h4>Accountability</h4>
              <h4>Confidentiality</h4>
              <h4>Respect</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
