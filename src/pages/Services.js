import React from 'react'
import {
  FaAngleRight,
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
import { MdMail, MdOutlineSupportAgent } from "react-icons/md";
import { TbMail, TbTruckDelivery } from "react-icons/tb";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="stt   py-20">
        <section className="flex justify-center text-center items-center">
          <div>
            <p className="text-5xl font-extrabold text-[#FF4800]">Services</p>
          </div>
        </section>
      </div>

      <div className="md:mt-20 mt-20">
        <div className="text-center">
          <p className="font-bold text-[#FF4800]">OUR SERVICES</p>
          <p className="md:text-4xl text-2xl md:mt-3 font-extrabold">
            Best Logistic Services
          </p>
        </div>
        <div className="mt-10 grid gap-3 grid-rows-4 md:grid-rows-none md:grid-cols-4 md:px-20 px-5">
          <section className="w-full shadow-md shadow-gray-500">
            <img
              src="https://demo.htmlcodex.com/2202/shipping-company-website-template/img/service-1.jpg"
              alt=""
              className="w-full"
            />
            <div className=" pb-2">
              <p className="text-lg mt-5 px-2 py-1 rounded-r-full text-white font-bold bg-[#FF4800] w-[50%]">
                Air Freight
              </p>
              <p className="mt-7 px-2 text-sm">
                Experience swift,reliable air freight with our customized
                solutions, extensive global network , advanced tracking
                technology , and unwavering commitment to compliance and
                security
              </p>
            </div>
          </section>
          <section className="w-full shadow-md shadow-gray-500">
            <img
              src="https://demo.htmlcodex.com/2202/shipping-company-website-template/img/service-2.jpg"
              alt=""
              className="w-full"
            />
            <div className=" pb-2">
              <p className="text-lg mt-5 px-2 py-1 rounded-r-full text-white font-bold bg-[#FF4800] w-[60%]">
                Ocean Freight
              </p>
              <p className="mt-7 px-2 text-sm">
                Discover efficient ocean freight solution tailored to your needs
                , leveraging our extensive network of global ports and shipping
                lanes.
              </p>
            </div>
          </section>
          <section className="w-full shadow-md shadow-gray-500">
            <img
              src="https://demo.htmlcodex.com/2202/shipping-company-website-template/img/service-3.jpg"
              alt=""
              className="w-full"
            />
            <div className=" pb-2">
              <p className="text-lg mt-5 px-2 py-1 rounded-r-full text-white font-bold bg-[#FF4800] w-[50%]">
                Road Freight
              </p>
              <p className="mt-7 px-2 text-sm">
                We specialize in handling diverse cargo types , ensuring timely
                delivery and cost efficient solutions. We guaratee the secure
                transportation of your goods by road
              </p>
            </div>
          </section>
          <section className="w-full shadow-md shadow-gray-500">
            <img
              src="https://demo.htmlcodex.com/2202/shipping-company-website-template/img/service-4.jpg"
              className="w-full"
              alt=""
            />
            <div className=" pb-2">
              <p className="text-lg mt-5 px-2 py-1 rounded-r-full text-white font-bold bg-[#FF4800] w-[50%]">
                Train Freight
              </p>
              <p className="mt-7 px-2 text-sm">
                Benefit from reliable scheduling , cost effective transportation
                , and reduced environmental impact compared to traditional
                modes. Effective rail network for domestics and international
                shipment
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-[#F2F2F4] mt-20 px-5 md:px-24 md:py-10 py-5 md:flex">
        <section className="md:w-[50%]">
          <p className="md:text-3xl text-2xl mt-5 font-bold">
            #1 Place To Manage All Of Your Shipments
          </p>
          <p className="md:mt-5 mt-2 text-gray-500">
            Worldwide shipping facilitates the transportation of goods acreoss
            borders and oceans, offering business a global reach. Involving
            various modes of transportation with each mode chosen based on
            factor like distance and urgency.
          </p>

          <div className="mt-5 flex">
            <p className="p-3 bg-[#FF4800] text-white w-fit">
              <MdOutlineSupportAgent className="md:text-5xl text-3xl" />
            </p>
            <section className="md:mt-4 mt-1 ml-2">
              <p className="text-sm font-medium">Call for any query!</p>
              <p className="md:text-2xl text-xl text-[#FF4800] font-semibold">
                +012 345 6789
              </p>
            </section>
          </div>
        </section>
        <section className="md:p-20 md:mt-0 mt-10  md:py-5">
          <div>
            <section className="flex">
              <FaUsers className="md:text-7xl text-5xl" />
              <div className="ml-3 md:mt-3">
                <p className="md:text-lg font-bold">1234</p>
                <p className="text-sm font-medium text-[#FF4800]">
                  Happy Clients
                </p>
              </div>
            </section>
            <section className="mt-5 flex">
              <FaStar className="md:text-7xl text-5xl" />
              <div className="ml-3 md:mt-3">
                <p className="md:text-lg font-bold">1234</p>
                <p className="text-sm font-medium text-[#FF4800]">
                  Customer Reviews
                </p>
              </div>
            </section>
            <section className="mt-5 flex">
              <FaShip className="md:text-7xl text-5xl" />
              <div className="ml-3 md:mt-3">
                <p className="md:text-lg font-bold">1234</p>
                <p className="text-sm font-medium text-[#FF4800]">
                  Complete Shipments
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>

      <Footer/>
    </div>
  );
}

export default Services