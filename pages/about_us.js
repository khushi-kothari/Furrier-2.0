import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

class About extends Component {
  render() {
    return (
      <div>
        <div className=" bg-[url('../public/bg-2.png')] bg-cover bg-center">
          <Navbar />
          <AboutUs hide_var={true} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
