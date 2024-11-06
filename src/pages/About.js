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

const About = () => {


  
  return (
    <div>
      <Navbar />

      <div className="stt   py-20">
        <section className="flex justify-center text-center items-center">
          <div>
            <p className="text-5xl font-extrabold text-[#FF4800]">About Us</p>
          </div>
        </section>
      </div>

      <div className="md:mt-28 mt-20 mb-10 md:px-24 px-5 md:flex">
        <section data-aos="fade-right" className="md:w-[40%] md:ml-4">
          <img
            src="https://demo.htmlcodex.com/1309/logistics-company-website-template/img/about.jpg"
            alt=""
            className="w-[100%]"
          />
          <h3 className="bg-[#FF4800] py-3 w-[100%] text-center font-bold text-2xl">
            25+ Years Experience
          </h3>
        </section>

        <section className="md:px-10  md:w-[65%]">
          <p data-aos="fade-up" className="text-[#FF4800] mt-16 font-bold ">
            About Us
          </p>
          <p
            data-aos="fade-up"
            className="md:text-4xl text-2xl font-bold md:mt-3"
          >
            Trusted & Faster Logistic Service Provider
          </p>
          <p data-aos="fade-up" className="md:mt-5 mt-2 text-gray-500">
            PrimePath Logistics is a registered and licensed contract logistics,
            freight forwarding, global sourcing, distribution, logistics and
            supply chain consulting company
          </p>
          <p data-aos="fade-up" className="mt-2  text-gray-500">
            We are in business to provide services such as Contract Logistics,
            Freight Forwarding, Warehousing and Distribution, Cross Docking,
            Reverse Logistics, Customs Brokerage, Consulting and Optimization
            and Last mile delivery
          </p>
        </section>
      </div>

      <div className="md:mt-20 mt-10">
        <div className="text-center">
          <p
            data-aos="fade-right"
            className="md:text-3xl text-xl md:mt-3 font-extrabold"
          >
            Trusted Collaborations
          </p>
        </div>
        <div className="mt-5 grid md:gap-3 items-center grid-rows-4 md:grid-rows-none md:grid-cols-4 md:px-20 px-5">
          <section data-aos="fade-right" className="flex justify-center">
            <img
              className="md:w-full w-[50%]"
              src="https://www.fastfutures.com/app/uploads/2022/04/HSBC-Symbol-png.webp"
              alt=""
            />
          </section>
          <section data-aos="fade-right" className="flex justify-center">
            <img
              className="md:w-full w-[50%]"
              src="https://tefco.com.au/wp-content/uploads/2023/03/tefco-logo-v9a-RGB-03.svg"
              alt=""
            />
          </section>
          <section data-aos="fade-right" className="flex justify-center">
            <img
              className="md:w-full w-[50%]"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Hapag_lloyd_logo.svg/2560px-Hapag_lloyd_logo.svg.png"
              alt=""
            />
          </section>

          <section data-aos="fade-right" className="flex justify-center">
            <img
              className="md:w-full w-[50%]"
              src="https://vertoro.com/wp-content/uploads/2021/10/Maersk_Logo.png"
              alt=""
            />
          </section>
          <section data-aos="fade-right" className="flex justify-center">
            <img
              className="md:w-full w-[50%]"
              src="https://b2216782.smushcdn.com/2216782/wp-content/uploads/2019/10/SmartWay-transport-partnership.jpg?lossy=1&strip=1&webp=1"
              alt=""
            />
          </section>
        </div>
      </div>
      <div className="md:mt-20 mt-10">
        <div data-aos="zoom-in" className="text-center">
          <p className="md:text-4xl text-2xl md:mt-3 font-extrabold">
            Expert Team Members
          </p>
        </div>
        <div className="md:mt-10 mt-5 grid gap-3 grid-rows-4 md:grid-rows-none md:grid-cols-4 md:px-20 px-5">
          <section
            data-aos="fade-right"
            className="p-3 shadow-md shadow-gray-500"
          >
            <div className="flex items-center justify-center ">
              <img
                src="./img/img11.webp"
                alt=""
                className="rounded-full h-[250px] w-[250px] "
              />
            </div>
            <div className="mt-5">
              <p className="text-lg text-center font-bold uppercase">
                Philippe Leclair
              </p>
              <p className="text-sm mt-2 font-medium text-center">
                Operation Manager
              </p>
            </div>
          </section>
          <section
            data-aos="fade-right"
            className="p-3 shadow-md shadow-gray-500"
          >
            <div className="flex  items-center justify-center ">
              <img
                src="./img/img33.webp"
                alt=""
                className="rounded-full h-[250px] w-[250px]"
              />
            </div>
            <div className="mt-5">
              <p className="text-lg text-center font-bold uppercase">
                Ethan Gadsdon
              </p>
              <p className="text-sm mt-2 font-medium text-center">
                Supply Chain Analyst
              </p>
            </div>
          </section>
          <section
            data-aos="fade-right"
            className="p-3 shadow-md shadow-gray-500"
          >
            <div className="flex items-center justify-center ">
              <img
                src="./img/img44.webp"
                alt=""
                className="rounded-full h-[250px] w-[250px] "
              />
            </div>
            <div className="mt-5">
              <p className="text-lg text-center font-bold uppercase">
                Leo Tucker
              </p>
              <p className="text-sm mt-2 font-medium text-center">
                Transportation Coordinator
              </p>
            </div>
          </section>
          <section
            data-aos="fade-right"
            className="p-3 shadow-md shadow-gray-500"
          >
            <div className="flex items-center justify-center ">
              <img
                src="./img/img22.webp"
                alt=""
                className="rounded-full h-[250px] w-[250px] "
              />
            </div>
            <div className="mt-5">
              <p className="text-lg text-center font-bold uppercase">
                Colleen G. Brown
              </p>
              <p className="text-sm mt-2 font-medium text-center">
                Custom Broker
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default About