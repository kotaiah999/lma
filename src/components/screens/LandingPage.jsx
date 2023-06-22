import React from "react";
import Header from "../Header";
import "./LandingPage.css";
import Banner1 from "../Banner1";
import Footer from "../Footer";
import Banner2 from "../Banner2";
import Banner4 from "../Banner4";
import Banner3 from "../Banner3";
import Banner5 from "../Banner5";

function LandingPage() {
  return (
    // <div className="landing_page">
    //     <div id="landing_header"><Header/></div>   
    <>
        <Header/>
        <Banner1 />
        <Banner2 />
        <Banner3 />
        <Banner4 />
        <Banner5 />
        <Footer/> 
        </>
    // </div>
  );
}

export default LandingPage;
