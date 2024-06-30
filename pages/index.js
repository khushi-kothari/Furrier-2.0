import Head from "next/head";
import Navbar from "../components/Navbar";
//import TypeWriter from "react-typewriter"
import Image from "next/image";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import Link from "next/link";
import AboutUs from "../components/AboutUs";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <div className=" bg-[url('../public/bg-2.png')] bg-cover bg-center">
        <Navbar />
        <AboutUs hide_var={false} />
      </div>
      <section className="text-gray-600 body-font min-h-dvh bg-gray-100">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="hidden md:inline-block lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/services-2.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-600">
              Services
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              We provide various services that are important for your pet. Check
              out our services and provide your pet with the best facilities
              available in the town.
            </p>
            <div className="flex justify-center">
              <Link href="/services">
                <a className=" text-center border-r-2 border-b-2 border-l-2 border-gray-200 bg-white shadow-md rounded-r-full rounded-l-full p-4 font-bold text-cyan-600 text-md hover:shadow-lg w-full md:w-40">
                  View Page
                </a>
              </Link>
            </div>
          </div>
          <div className="md:hidden lg:max-w-lg lg:w-1/2 md:w-1/2 mt-10 md:mt-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/services.png"
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font min-h-dvh md:my-20">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-600">
              Adoption
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Check out the necessary guidelines required to adopt a pet to
              prevent yourself from any unknown legal troubles. Also, check out
              the 'Available Pets' section to know your options.
            </p>
            <div className="flex justify-center">
              <Link href="/adoption/pets">
                <a className=" text-center border-r-2 border-b-2 border-l-2 border-gray-200 bg-white shadow-md rounded-r-full rounded-l-full p-4 font-bold text-cyan-600 text-md hover:shadow-lg w-full md:w-40">
                  View Page
                </a>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-1/2 md:w-1/2">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/adopt.jpeg"
            ></img>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font min-h-dvh md:py-20 bg-gray-100">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="hidden md:inline-block lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/services.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-600">
              FAQs
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Check out the FAQs in the Help Desk tab. Feel free to contact us
              in case of any further queries.
            </p>
            <div className="flex justify-center">
              <Link href="/help_desk">
                <a className=" text-center border-r-2 border-b-2 border-l-2 border-gray-200 bg-white shadow-md rounded-r-full rounded-l-full p-4 font-bold text-cyan-600 text-md hover:shadow-lg w-full md:w-40">
                  View Page
                </a>
              </Link>
            </div>
          </div>
          <div className="md:hidden lg:max-w-lg lg:w-1/2 md:w-1/2 mt-10 md:mt-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/services.png"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
