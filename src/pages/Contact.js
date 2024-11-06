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

const Contact = () => {

   const submit = () => {
     window.location.href = "/";
  };
  
  return (
    <div>
      <Navbar />
      <div className="stt   py-20">
        <section className="flex justify-center text-center items-center">
          <div>
            <p className="text-5xl font-extrabold text-[#FF4800]">Contact Us</p>
          </div>
        </section>
      </div>

      <div className="md:px-28 md:mt-20 mt-10 px-5">
        <div className=" md:flex">
          <section className=" bg-[#FF4800] md:w-[50%]">
            <form action="" className="p-3 w-full">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="h-[45px] outline-none border-none px-5 w-full"
              />
              <br />
              <input
                type="text"
                required
                placeholder="Your Email"
                className="h-[45px] outline-none border-none mt-2 px-5 w-full"
              />
              <br />
              <input
                type="text"
                required
                placeholder="Subject"
                className="h-[45px] outline-none border-none mt-2 px-5 w-full"
              />
              <br />

              <textarea
                placeholder="Message"
                className="h-[150px] outline-none border-none mt-2 p-5 w-full"
              />

              <button onClick={submit} className="w-full stt border-white border h-[45px] mt-2 font-bold text-white ">
                Send Message
              </button>
            </form>
          </section>

          <section className="md:w-[50%] md:mt-0 mt-3">
            <img
              className="md:h-[420px]"
              src="https://demo.htmlcodex.com/2202/shipping-company-website-template/img/feature.jpg"
              alt=""
            />
          </section>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Contact