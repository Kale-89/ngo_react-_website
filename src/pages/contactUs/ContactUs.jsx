import { useEffect, useState } from "react";
import "./contactUs.css";

export default function ContactUs() {
  const [submited, setSubmited] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [infos, setInfos] = useState({
    firstName: "",
    lastName: "",
    email: "",
    opinion: "",
  });

  useEffect(() => {
    submited && setEmpty(false);
    empty && setSubmited(false);
  }, [submited, empty]);

  const submitHandler = () => {
    infos.firstName === "" ||
    infos.lastName === "" ||
    infos.email === "" ||
    infos.opinion === ""
      ? setEmpty(true)
      : setSubmited(true);
  };
  return (
    <div className="contact-us">
      <div className="img-container">
        <img src="assets/contact-us.jpg" alt="" />
      </div>
      <div className="contact-info">
        <div className="contactInfo">
          <div>
            <h5 className="question">
              Have any comments or questions for us, drop a note below! We Will
              be sure to get back to you shortly. also You can use one of this.
            </h5>
            <hr className="horizontal" />
            <div className="c-info">
              <p>Gondar, Ethiopia</p>
              <p>PO Box: 1003</p>
              <p>example@gmail.com</p>
              <p>Phone No: +251 111111111</p>
              <p>Phone No: +251 784347782</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          {empty && (
            <div className="warning">
              Please fill all the information requered
            </div>
          )}
          <input
            type="text"
            placeholder="First Name"
            onChange={(event) =>
              setInfos({ ...infos, firstName: event.target.value })
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(event) =>
              setInfos({ ...infos, lastName: event.target.value })
            }
          />
          <input
            type="email"
            placeholder="Example@example.com"
            onChange={(event) =>
              setInfos({ ...infos, email: event.target.value })
            }
          />
          <textarea
            placeholder="Tell Us What You Think"
            cols="30"
            rows="10"
            onChange={(event) =>
              setInfos({ ...infos, opinion: event.target.value })
            }
          ></textarea>
          <button className="submit-btn" onClick={submitHandler}>
            SUBMIT
          </button>
          {submited && (
            <div className="message">
              Your Message has been submited we will get back to you as soon as
              possible!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
