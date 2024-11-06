import React from "react";
import Navbar from "../pages/Navbar";
import {
  FaAngleRight,
  FaCheck,
  FaGlobe,
  FaMap,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShip,
  FaStar,
  FaTruck,
  FaUsers,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdMail } from "react-icons/md";
import Footer from "../pages/Footer";

const Firstitem = () => {
  return (
    <div>
      <nav className="">
        <section className="flex gap-2 justify-center md:px-16 py-3 bg-[#1F1F2E] text-white text-xs">
          <p className="flex gap-2 items-center">
            <FaPhoneAlt />
            <a href="tel:+39 365 478 9576">+39 365 478 9576</a>
          </p>
          |
          <p className="flex gap-1 items-center">
            <IoMdMail className="text-sm" />
            <a href="mailto:info@primepath.pro">Info@primepath.pro</a>
          </p>
        </section>

        <div className="flex px-5 md:px-16 md:py-3 py-5 items-center justify-between">
          <section className="flex text-[#FF4800] text-2xl gap-2 font-extrabold text-center md:text-4xl">
            <FaTruck className="mt-1" />
            <p>PRIMEPATH</p>
          </section>

          <section className="rounded-md px-7 md:block hidden py-2 text-sm font-semibold text-white bg-green-700">
            Active Order
          </section>
        </div>
      </nav>

      <div className="md:px-10 px-3">
        {/* <div>
          <p className="text-xl font-medium text-[#FF4800]">
            Order for{" "}
            <span className="font-semibold text-black">
              "420925529214490344490908059615"
            </span>
          </p>
        </div> */}

        <div>
          <ul className="grid md:grid-cols-6 grid-cols-3 text-center">
            <li className="border-2  bg-black text-base text-white border-black py-2 font-semibold">
              Order Status:
            </li>
            <li className="border-2 border-black border-l-0 text-base py-2 font-semibold">
              Pending
            </li>
            <li className="border-2 border-black border-l-0 text-base py-2 font-semibold ">
              Processing
            </li>
            <li className="border-2 bg-red-700 text-white mt-1 md:mt-0 border-black border-l-2 md:border-l-0 text-base py-2 font-semibold">
              On Hold
            </li>
            <li className="border-2 mt-1 md:mt-0 border-black border-l-0 text-base py-2 font-semibold">
              Completed
            </li>
            <li className="border-2 mt-1 md:mt-0 border-black border-l-0 text-base py-2 font-semibold">
              Canceled
            </li>
          </ul>
        </div>

        <div className="md:mt-10 mt-5">
          <p className="font-medium">Tracking Number</p>
          <p className="font-bold underline">PP54896452-014SH</p>
        </div>

        <div className="mt-10 md:grid gap-10 grid-cols-2">
          <section className="p-2 mb-10 md:h-[200px] border-2 border-green-600 border-l-8">
            <p className="text-xl font-semibold">Delivery Details</p>
            <div className="md:grid grid-cols-2 ">
              <p className="text-lg mt-2 font-medium">
                Sender: <span>Sabrinna Levorsen</span>
              </p>
              <p className="text-lg mt-2 font-medium">
                Reciver: <span>Chris Andexler</span>
              </p>
            </div>
            <div className="md:grid grid-cols-2 ">
              <p className="text-lg mt-2 font-medium">
                From: <span>Shahriar, Iran</span>
              </p>
              <p className="text-lg  mt-2 font-medium">
                To: <span>1714 W Davidson Ave, Gastonia, NC 28052</span>
              </p>
            </div>
            <div className="md:grid grid-cols-2 ">
              <p className="text-lg mt-2 font-medium">
                DOD: <span>Null</span>
              </p>
              <p className="text-lg  mt-2 font-medium">
                DOA: <span>Null</span>
              </p>
            </div>
          </section>

          <section>
            <div className="md:text-2xl text-xl font-bold text-black">
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Shipping label created, Awaiting item</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
                <p>Shahriar, Iran</p>
                <p>April 16, 2024, 08:15am</p>
              </p>
            </div>
            <div className="md:text-2xl text-xl font-bold text-black">
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Received by shipping patner, Primepath awaiting item</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
                <p>Shahriar, Iran</p>
                <p> April 16, 2024, 09:19am</p>
                <p>
                  Shipping Patner :باربری حاتمی (آسیاسفر شهریار), Barbari Hatami{" "}
                </p>
              </p>
            </div>
            <div className="md:text-2xl text-xl font-bold text-black">
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>
                  Departed Shipping Patner Facility, Primepath awaiting item
                </p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
                <p> Shahriar, Iran</p>
                <p> April 16, 2024, 09:43am</p>
              </p>
            </div>
            <div className="md:text-2xl text-xl font-bold">
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Arrived at Primepath Facility</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
                <p> Banda Abbas, Iran</p>
                <p> April 16, 2024, 02:11pm</p>
              </p>
            </div>
            <div className="text-2xl font-bold text-black">
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Departed PrimePath Facility</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
                <p> Banda Abbas, Iran</p>
                <p> April 17, 2024, 10:24am</p>
              </p>
            </div>
            <div className="text-2xl font-bold -600">
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Arrived Suez Canal</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
                <p> Port Said, Egypt</p>
                <p> April 18, 2024, 06:35am</p>
              </p>
            </div>
            <div className="text-2xl font-bold -600">
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Departed Suez Canal</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
                <p> Port Said, Egypt</p>
                <p> May 28, 2024, 12:08am</p>
              </p>
            </div>
            <div className="text-2xl font-bold -600">
              <section className="flex  gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Arrived The Port Of Mersin</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
                <p> Mersin, Turkey</p>
                <p> June 4th, 2024, 02:11pm</p>
              </p>
            </div>
            <div className="text-2xl font-bold -600">
              <section className="flex text-red-700 gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Arrived Instanbul Airport (IST)</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
                <p> Instanbul, Turkey</p>
                <p> June 9th, 2024, 04:27pm</p>
              </p>
            </div>
          </section>
          <p className="md:mt-0 mt-3 text-sm md:text-base">
            At Primepath Logistics we exceed expectations to ensure security and
            safety of your esteeemed cargo. With our cutting-edge tracking
            system, follow your shipment's journey with confidence, assured it's
            in capable hands
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Firstitem;
