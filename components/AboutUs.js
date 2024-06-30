import Link from "next/link";
import React, { useState } from "react";

const AboutUs = ({ hide_var }) => {
  //   console.log(hide_var);
  return (
    <section className="text-gray-600 body-font min-h-dvh">
      <div className="container mx-auto flex px-5 py-10 md:py-24 md:flex-row flex-col items-center">
        <div className="lg:w-7/12 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-600">
            About Us
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            Furrier is an Animal Welfare platform and an Information Hub for
            current and prospective pet owners, which aims to assist the owners
            in taking better care for their pets, by connecting them with
            essential facilities/services and by providing services like
            health/medication monitoring, diet plans for pets etc. Furthermore,
            we also aim to Promote and assist adoption of animals and contribute
            towards other animal welfare programs as well as create awareness
            regarding prominent issues of Animal Welfare, and propose possible
            solutions
          </p>
          <div className={`${hide_var ? "hidden" : "flex"} justify-center`}>
            <Link href="/about_us">
              <a className=" text-center border-r-2 border-b-2 border-l-2 border-gray-200 bg-white shadow-md rounded-r-full rounded-l-full p-4 font-bold text-cyan-600 text-md hover:shadow-lg w-full md:w-40">
                View Page
              </a>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-1/2 md:w-1/2 ">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/animals-bg.png"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
