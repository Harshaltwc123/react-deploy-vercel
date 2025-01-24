import React from "react";
import Guide from "../component/Guide";
import Home1 from "../component/Home1";
import Brands from "../component/Brands";
import Unleash from "../component/Unleash";
import Implements from "../component/Implements";
import Faq from "../component/Faq";
import Landing from "../component/Landing";
import Flipcard from "../component/Flipcard";

function Home() {
  return (
    <div className="mt-10">
      <Flipcard />
      <Brands />
      <Home1 />
      <Guide />
      <Unleash />
      <Implements />
      <Faq />
      {/* <Landing /> */}
    </div>
  );
}

export default Home;
