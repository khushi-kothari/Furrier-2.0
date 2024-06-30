import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
{
  /*import {MdOutlineArrowDropDown} from 'react-icons/md'*/
}

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex pb-6 pl-20 pt-10">
      {/* <div className="flex-none flex w-14 md:w-28 items-center my-auto border-r-2 border-b-2 border-gray-200 bg-white shadow-md rounded-r-full"> */}
      <Link href="/">
        <Image
          src="/paw.png"
          alt="Vercel Logo"
          height="60px"
          width="60px"
          className=" ml-10"
        />
      </Link>
      {/* </div> */}
      <div className="grow"></div>
      <div className="w-full">
        <ul className="flex-none flex nav-ul">
          <li>
            <Link href="/">
              <a href="#" className={router.pathname == "/" ? "active" : ""}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a
                href="#"
                className={router.pathname == "/services" ? "active" : ""}
              >
                Services
              </a>
            </Link>
          </li>
          {/*<li><a href="#">Adoption<MdOutlineArrowDropDown/></a></li>
               <div class="dropdown">
               <div class="dropdown-content">
               <li><Link href="/adoption/pets"><a href="#" className={router.pathname == "/adoption/pets" ? "active" : ""}>Available Pets</a></Link></li>
               <li><Link href="/adoption/guidelines"><a href="#" className={router.pathname == "/adoption/guidelines" ? "active" : ""}>Guidelines</a></Link></li>
               </div>
            </div>*/}
          <li>
            <Link href="/adoption/pets">
              <a
                href="#"
                className={router.pathname == "/adoption/pets" ? "active" : ""}
              >
                Available Pets
              </a>
            </Link>
          </li>
          <li className="hidden md:inline-block">
            <Link href="/adoption/guidelines">
              <a
                href="#"
                className={
                  router.pathname == "/adoption/guidelines" ? "active" : ""
                }
              >
                Guidelines
              </a>
            </Link>
          </li>
          <li>
            <Link href="/help_desk">
              <a
                href="#"
                className={router.pathname == "/help_desk" ? "active" : ""}
              >
                Help Desk
              </a>
            </Link>
          </li>
          <li className="hidden md:inline-block">
            <Link href="/about_us">
              <a
                href="#"
                className={router.pathname == "/about_us" ? "active" : ""}
              >
                About Us
              </a>
            </Link>
          </li>
          <li className="hidden">
            <Link href="/profile">
              <a
                href="#"
                className={router.pathname == "/profile" ? "active" : ""}
              >
                Profile
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="grow"></div>
    </div>
  );
}
