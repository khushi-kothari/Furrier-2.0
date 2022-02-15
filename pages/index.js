import Head from 'next/head'
import Navbar from '../components/Navbar'
//import TypeWriter from "react-typewriter"
//import Image from 'next/image'
import Footer from "../components/Footer"
import { useRouter } from 'next/router';
import Link from 'next/link'

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Furrier</title>
        <meta name="description" content="Generated by create next app" />
        {/*<link rel="icon" href="../public/logo.png" />*/}
      </Head>
    
      <Navbar />
      
      {/* Head */}
      {/*<div className="mt-7 bg-slate-800 h-screen w-full bg-[url('../public/header.jpeg')] bg-cover bg-blend-overlay">*/}
      {/*<div className="mt-7 px-20 md:pl-40 flex flex-col justify-center items-center h-screen w-full bg-slate-700">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-1/2 gap-20">
        <div className="flex flex-col justify-center items-center">
        <h1 className="title font-sans text-xl md:text-3xl font-medium text-cyan-600 mb-10">About Us</h1>
        </div>
        <div className="w-full bg-[url('../public/header.jpeg')] bg-no-repeat bg-contain" ></div>  
        </div>
      </div>*/}
  
      <section class="text-gray-600 body-font h-min-screen md:my-20">
      <div class="container mx-auto flex px-5 py-10 md:py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-600">About Us
            <br class="hidden lg:inline-block" />
          </h1>
          <p class="mb-8 leading-relaxed">Furrier is an Animal Welfare platform and an Information Hub for current and prospective pet owners, which aims to assist the owners in taking better care for their pets, by connecting them with essential facilities/services and by providing services like health/medication monitoring, diet plans for pets etc. Furthermore, we also aim to Promote and assist adoption of animals and contribute towards other animal welfare programs as well as create awareness regarding prominent issues of Animal Welfare, and propose possible solutions</p>
          <div class="flex justify-center">
          <Link href="/about_us"><a className=" text-center border-r-2 border-b-2 border-l-2 border-gray-200 bg-white shadow-md rounded-r-full rounded-l-full p-4 font-bold text-cyan-600 text-md hover:shadow-lg w-full md:w-40">View Page</a></Link>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-1/2 md:w-1/2">
        <img class="object-cover object-center rounded" alt="hero" src="/about-us.png"></img>
        </div>
      </div>
    </section>

    <section class="text-gray-600 body-font h-min-screen md:my-20 bg-gray-100">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="hidden md:inline-block lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img class="object-cover object-center rounded" alt="hero" src="/services.png" />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-600">Services
            <br class="hidden lg:inline-block" />
          </h1>
          <p class="mb-8 leading-relaxed">We provide various services that are important for your pet. Check out our services and provide your pet with the best facilities available in the town.</p>
          <div class="flex justify-center">
          <Link href="/services"><a className=" text-center border-r-2 border-b-2 border-l-2 border-gray-200 bg-white shadow-md rounded-r-full rounded-l-full p-4 font-bold text-cyan-600 text-md hover:shadow-lg w-full md:w-40">View Page</a></Link>
          </div>
        </div>
        <div class="md:hidden lg:max-w-lg lg:w-1/2 md:w-1/2 mt-10 md:mt-0">
          <img class="object-cover object-center rounded" alt="hero" src="/services.png" />
        </div>
      </div>
    </section>

    <section class="text-gray-600 body-font h-min-screen md:my-20">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-600">Adoption
            <br class="hidden lg:inline-block" />
          </h1>
          <p class="mb-8 leading-relaxed">Check out the necessary guidelines required to adopt a pet to prevent yourself from any unknown legal troubles. Also, check out the 'Available Pets' section to know your options.</p>
          <div class="flex justify-center">
          <Link href="/adoption/pets"><a className=" text-center border-r-2 border-b-2 border-l-2 border-gray-200 bg-white shadow-md rounded-r-full rounded-l-full p-4 font-bold text-cyan-600 text-md hover:shadow-lg w-full md:w-40">View Page</a></Link>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-1/2 md:w-1/2">
        <img class="object-cover object-center rounded" alt="hero" src="/adopt.jpeg"></img>
        </div>
      </div>
    </section>

    <section class="text-gray-600 body-font h-min-screen md:py-20 bg-gray-100">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="hidden md:inline-block lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img class="object-cover object-center rounded" alt="hero" src="/services.png" />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-600">FAQs
            <br class="hidden lg:inline-block" />
          </h1>
          <p class="mb-8 leading-relaxed">Check out the FAQs in the Help Desk tab. Feel free to contact us in case of any further queries.</p>
          <div class="flex justify-center">
          <Link href="/help_desk"><a className=" text-center border-r-2 border-b-2 border-l-2 border-gray-200 bg-white shadow-md rounded-r-full rounded-l-full p-4 font-bold text-cyan-600 text-md hover:shadow-lg w-full md:w-40">View Page</a></Link>
          </div>
        </div>
        <div class="md:hidden lg:max-w-lg lg:w-1/2 md:w-1/2 mt-10 md:mt-0">
          <img class="object-cover object-center rounded" alt="hero" src="/services.png" />
        </div>
      </div>
    </section>

      <Footer />
    </div>
  )
}

        