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

const Item3 = () => {
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
          <p className="font-bold underline">PP54896454-016SH</p>
              </div>
              

              <div className='grid md:grid-cols-2 md:gap-5 mt-10'>
                    <section className="p-2 md:mb-10 mb-3 border-2 border-green-600 border-l-8">
                      <div className="md:grid grid-cols-2 gap-2">
                          <section>
                              <p className=" uppercase font-bold md:mt-5">Shipper Information</p> 
                                         <p className="md:mt-5 mt-2 font-medium">
                <b>Name: </b>Stephen Walter
              </p>
                                         <p className="md:mt-2 font-medium">
                <b>Address: </b>Cheyenne, Wyoming.
              </p>
                                         <p className="md:mt-2 font-medium">
                <b>Email: </b><a href="mailto:stephenwalter439@gmail.com">Stephenwalter439@gmail.com</a>
              </p>
           
                          </section>
                          <section>
                              <p className=" uppercase font-bold mt-5">Receiver Information</p> 
                                         <p className="md:mt-5 mt-2 font-medium">
                <b>Name: </b>Alain Mongenot
              </p>
                                         <p className="md:mt-2 font-medium">
                <b>Address: </b>3-1225 Provencher Brossard, Quebec J4W1Z1.
              </p>
                                         <p className="md:mt-2 font-medium">
                                  <b>Email: </b><a href="mailto:alainmongenot@gmail.com">alainmongenot@gmail.com</a>
              </p>
           
                          </section>
                          
   </div>
        
          </section>
                    <section className="p-2 border-2 border-green-600 border-l-8">
                              <p className=" uppercase font-bold md:mt-5 mmt-3">Shipment Information</p> 
                      <div className="grid md:grid-cols-2 md:gap-2">
                          <section>
                                         <p className="md:mt-5 mt-3 font-medium">
                <b>Origin: </b>Cheyenne, Wyoming, United States.
              </p>
                                         <p className="md:mt-2 font-medium">
                <b>Departure Date: </b> August 20, 2024, 04:30pm
              </p>
                                         <p className="md:mt-2 font-medium">
                <b>Carrier: </b>Oris Brashear Wrist Watch.
              </p>
           
                          </section>
                          <section>
                                         <p className="md:mt-5 font-medium">
                <b>Destination: </b>3-1225 Provencher Brossard, Quebec J4W1Z1.
              </p>
                                         <p className="md:mt-2 font-medium">
                <b>Expected Delivery Date: </b>August 22, 2024, 08:00am
              </p>
                                         <p className="md:mt-2 font-medium">
                                  <b>Item Quantity: </b><a href="mailto:alainmongenot@gmail.com">1.</a>
              </p>
           
                          </section>
                          
   </div>
        
          </section>
   
              </div>

         
              <div className="md:text-2xl text-xl font-bold text-black">
                  <p className='py-10 pb-5 underline'>Tracking Route:</p>
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Shipping label created, Awaiting item</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
                <p>Cheyenne, Wyoming.</p>
                <p>August 20, 2024, 04:30pm</p>
              </p>
            </div>
            <div className="md:text-2xl text-xl font-bold text-black">
              <section className="flex  gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Received by Shipping Partner</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
             <p>Cheyenne, Wyoming.</p>
                <p>August 20, 2024, 05:20pm</p>
              </p>
            </div>
            <div className="md:text-2xl text-xl font-bold text-black">
              <section className="flex  gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Departed Shipping Partner Facility.</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
                <p>Cheyenne, Wyoming.</p>
                 <p>August 20, 2024, 05:20pm</p>
              </p>
            </div>
            <div className="md:text-2xl text-green-700 text-xl font-bold text-black">
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Arrived Denver Internation Airport(DEN)</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
                <p>Denver, Colorado.</p>
                <p>August 20, 2024, 07:11pm</p>
              </p>
            </div>
            <div className="md:text-2xl text-xl font-bold text-black">
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Departed Denver Internation Airport(DEN)</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
                <p>Denver, Colorado.</p>
                <p>June 21, 2024, 04:30am</p>
              </p>
            </div>
            <div className="md:text-2xl text-xl font-bold text-black">
              <section className="flex gap-2 items-center">
                <FaMapMarkerAlt />
                <p>Arrived Quebec Jean Lesage International Airport(YQB)</p>
              </section>
              <p className="text-sm font-normal px-4 ml-3 mt-2 h-[100px] border-l-4 border-dotted border-green-700">
                <p>Quebec, Canada.</p>
                <p>August 22, 2024, 07:00am</p>
              </p>
            </div>

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

export default Item3