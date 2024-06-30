import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Grid from "../components/SGrid";
//import {FaPaw} from 'react-icons/fa'
import Footer from "../components/Footer";

class Services extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <div className="w-full h-15 mt-10 mb-10 md:mb-0">
            <h1 className="title font-sans text-3xl md:text-5xl lg:text-6xl font-bold text-pink-500 pl-10 md:pl-32">
              {" "}
              Services
            </h1>
          </div>

          <div className="service-bg w-screen h-auto md:bg-[url('../public/bg.jpg')] bg-no-repeat bg-cover py-24 md:pt-32">
            <Grid className="z-100" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Services;
