import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

class Available extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="mx-5 md:mx-20 mb-32 mt-10">
          <h1 className="title font-sans text-3xl md:text-5xl lg:text-6xl font-bold text-pink-500 mb-16 pl-5 md:pl-12">
            Available Pets
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row my-20 md:my-40 gap-y-10">
            <div className="bg-gray-300 h-36 w-48 md:h-48 md:w-60 mx-auto bg-[url('../public/dogo.png')] bg-cover"></div>
            <h1 className="mx-auto text-xl md:text-2xl -mt-6 inline md:hidden text-emerald-600 font-semibold">
              Dogs
            </h1>
            <div className="bg-gray-300 h-36 w-48 md:h-48 md:w-60 mx-auto bg-[url('../public/cats.png')] bg-cover"></div>
            <h1 className="mx-auto text-xl md:text-2xl -mt-6 hidden md:inline text-emerald-600 font-semibold">
              Dogs
            </h1>
            <h1 className="mx-auto text-xl md:text-2xl -mt-6 text-emerald-600 font-semibold">
              Cats
            </h1>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Available;
