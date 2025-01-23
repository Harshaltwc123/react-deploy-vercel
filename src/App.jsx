import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import WhatWeOffer from "./pages/WhatWeOffer";
import Events from "./pages/Events";
import HubnexLabs from "./pages/HubnexLabs";
import GetInTouch from "./pages/GetInTouch";
import AboutUs from "./pages/AboutUs";
import ApplyNow from "./pages/ApplyNow";
import Footer from "./component/Footer";
// import Strategic from "./component/Strategic";
import Guide from "./component/Guide";
import StrategicGuidance from "./component/StrategicGuidance";
import TechnologyEnablement from "./component/TechnologyEnablement";
import InvestmentOpportunity from "./component/InvestmentOpportunity";
import EcosystemDevelopment from "./component/EcosystemDevelopment";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-we-offer" element={<WhatWeOffer />} />
        <Route path="/events" element={<Events />} />
        <Route path="/hubnexlabs" element={<HubnexLabs />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/apply-now" element={<ApplyNow />} />
        <Route path="/" element={<Guide />} />
        <Route path="/strategic-guidance" element={<StrategicGuidance />} />
        <Route
          path="/technology-enablement"
          element={<TechnologyEnablement />}
        />
        <Route
          path="/investment-opportunity"
          element={<InvestmentOpportunity />}
        />
        <Route
          path="/ecosystem-development"
          element={<EcosystemDevelopment />}
        />
      </Routes>
      <Footer />
    </Router>
    // <Strategic/>
  );
}

export default App;
