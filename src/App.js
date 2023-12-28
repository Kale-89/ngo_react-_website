import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import Events from "./pages/events/Events";
import OurTeam from "./pages/ourTeam/OurTeam";
import ContactUs from "./pages/contactUs/ContactUs";
import TopBar from "./components/topbar/TopBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/ourTeam" element={<OurTeam />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
