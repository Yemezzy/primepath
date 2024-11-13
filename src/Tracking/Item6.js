import React from 'react'
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

const Item6 = () => {
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
            <IoMdMail className="text-sm" />{" "}
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

        <div>
          <ul className="grid md:grid-cols-6 grid-cols-3 text-center">
            <li className="border-2  bg-black text-base text-white border-black py-2 font-semibold">
              Order Status:
            </li>
            <li className="border-2  border-black border-l-0 text-base py-2 font-semibold">
              Pending
            </li>
            <li className="border-2 bg-green-700 text-white border-black border-l-0 text-base py-2 font-semibold ">
              Processing
            </li>
            <li className="border-2  mt-1 md:mt-0 border-black border-l-2 md:border-l-0 text-base py-2 font-semibold  ">
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
          <p className="font-bold underline">PP54896456-018SH</p>
              </div>
              

              <div className='gri md:grid-cols-2 md:gap-5 mt-10'>
                    <section className="p-2 md:mb-10 mb-3 border-2 border-green-600 border-l-8">
                      <div className="md:grid grid-cols-2 gap-2">
                          <section>
                              <p className=" uppercase font-bold md:mt-5">Shipper Information</p> 
                                          <p className="md:mt-5 mt-2 font-medium">
                <b>Name: </b>Abdulrahman Mohammed Abadzss
              </p>
                                         <p className="md:mt-2 font-medium">
                <b>Address: </b>Dubai, Uae.
              </p>
                                         {/* <p className="md:mt-2 font-medium">
                <b>Email: </b><a href="mailto:stephenwalter439@gmail.com">Stephenwalter439@gmail.com</a>
              </p> */}
           
                          </section>
                          <section>
                              <p className=" uppercase font-bold mt-5">Receiver Information</p> 
                                         <p className="md:mt-5 mt-2 font-medium">
                <b>Name: </b>Lilijagailumauk
              </p>
                                         <p className="md:mt-2 font-medium">
                <b>Address: </b>77 Lindisfarne Road NN17 2EL Корби
              </p>
                                         <p className="md:mt-2 font-medium">
                                  <b>Email: </b><a href="mailto:lilijagailumauk@gmail.com">lilijagailumauk@gmail.com</a>
              </p>
           
                          </section>
                          
   </div>
        
          </section>
                    {/* <section className="p-2 border-2 border-green-600 border-l-8">
                              <p className=" uppercase font-bold md:mt-5 mmt-3">Shipment Information</p> 
                      <div className="grid md:grid-cols-2 md:gap-2">
                          <section>
                                         <p className="md:mt-5 mt-3 font-medium">
                <b>Origin: </b>Nuremberg, Germany.
              </p>
                                         <p className="md:mt-2 font-medium">
                <b>Departure Date: </b> september 19 2024, 04:30pm.
              </p>
                                         <p className="md:mt-2 font-medium">
                <b>Carrier: </b>BMW 3.0 CSL(Limited edition).
              </p>
           
                          </section>
                          <section>
                                         <p className="md:mt-5 font-medium">
                <b>Destination: </b>7865 County Road 97, Bellville, OH 44813.
              </p>
                                         <p className="md:mt-2 font-medium">
                <b>Expected Delivery Date: </b>September 25 2024, 08:00am.
              </p>
                                         <p className="md:mt-2 font-medium">
                                  <b>Item Quantity: </b><a href="mailto:daveberry669@gmail.com">1 Car.</a>
              </p>
           
                          </section>
                          
   </div>
        
          </section> */}
   
              </div>

         
              <div className="md:text-2xl text-xl font-bold text-black">
                  <p className='py-10 pb-5 underline'>Tracking Route:</p>
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Shipping label created, Awaiting item.</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
                <p>Dubai, UAE.</p>
                <p>November 13, 2024, 08:15am</p>
              </p>
            </div>
            <div className="md:text-2xl text-xl font-bold text-black">
              <section className="flex  gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Received by Shipping Partner, Primepath awaiting item.</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
          <p>Dubai, UAE</p>
            <p>November 13, 2024, 09:19am</p>
              <p>
                  Shipping Partner: Al Mas Cargo.
                </p>
              </p>
            </div>
            <div className="md:text-2xl  text-xl font-bold ">
              <section className="flex  gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Departed Shipping Partner Facility, Primepath awaiting item.</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
               <p>Dubai, UAE.</p>
            <p>November 13,  2024, 09:43am</p>
              </p>
            </div>
            <div className="md:text-2xl text-green-600 text-xl font-bold ">
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Arrived Primepath Facility.</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
                <p>Jebel Ali Port, Dubai.</p>
                <p>November 14, 2024, 11:25pm</p>
              </p>
            </div>
            {/* <div className="md:text-2xl  text-xl font-bold ">
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Departed Jebel Ali Port, Dubai.</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
                <p>Dubai, UAE</p>
                <p>November 6, 2024, 06:24am</p>
              </p>
            </div>
            <div className="md:text-2xl text-red-600 text-xl font-bold ">
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Arrived at Suez Canal..</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-red-700">
                <p>Suez, Egypt.</p>
                <p>November 13, 2024, 08:18am</p>
              </p>
            </div> */}
          

            <p className="md:mt-5 mt-3 text-sm md:text-base">
            At Primepath Logistics we exceed expectations to ensure security and
            safety of your esteeemed cargo. With our cutting-edge tracking
            system, follow your shipment's journey with confidence, assured it's
            in capable hands
          </p>      
          </div>
          
             <Footer />
    </div>
  )
}

export default Item6