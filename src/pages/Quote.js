import React from "react";
import Navbar from "./Navbar";
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
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Footer from "./Footer";

const Quote = () => {
const [open, setOpen] = React.useState(false);

const handleOpen = () => {
  
  setTimeout(() => {
    setOpen(false);
  }, 3000);
 
};

  const submit = (event) => { 
    event.preventDefault();
    setOpen(true);
    setInterval(() => {
 
    }, 2000);
    setTimeout(() => {
      window.location.href = "/";
           setOpen(false);
           alert(
             "Your Request has been received, you will receive a response via email. Thank you, PRIMEPATH."
           );
    }, 3000);
  }

  return (
    <div>
      <Navbar />
      <div>
        <div className="  pt-10">
          <section className="flex justify-center text-center items-center">
            <div>
              <p className="text-5xl font-extrabold text-[#FF4800]">
                Get A Quote
              </p>
            </div>
          </section>
        </div>
        <div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            // onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
        <div className="md:px-7 px-3 mt-10">
          <form
            action=""
            className="p-5 border-4 border-[#FF4800] rounded-md"
            onSubmit={submit}
          >
            <p className="md:text-2xl text-xl font-bold">
              Request for Quote (RFQ)
            </p>
            <p className=" mt-2 font-medium text-sm md:text-base md:w-[70%]">
              Please complete the following information so we can calculate a
              quote/estimate. We will contact you as soon as possible to give
              you our best proposal. Thank you.
            </p>
            <div className="md:grid grid-cols-2 mt-5">
              <section>
                <label htmlFor="" className="text-lg font-semibold">
                  Full Name:
                </label>
                <br />
                <input
                  required
                  type="text"
                  className="mb-2 outline-none border-2 w-full border-black p-2 md:w-[80%]"
                />
                <br />
                <label htmlFor="" className="text-lg font-semibold">
                  Your Email:
                </label>
                <br />
                <input
                  required
                  type="email"
                  className="mb-2 outline-none border-2 border-black p-2 w-full md:w-[80%]"
                />
                <br />
                <label htmlFor="" className="text-lg font-semibold">
                  Cargo Description:
                </label>
                <br />
                <textarea
                  required
                  type="number"
                  className="mb-2 outline-none border-2 border-black p-2 w-full md:w-[80%] h-[100px]"
                />
                <br />
                <label htmlFor="" className="text-lg font-semibold">
                  Cargo Weight:
                </label>
                <br />
                <input
                  required
                  type="text"
                  className="mb-2 outline-none border-2 border-black p-2 w-full md:w-[80%]"
                />
              </section>

              <section>
                <label htmlFor="" className="text-lg font-semibold">
                  Shipping Mode / Services:
                </label>
                <br />

                <select
                  required
                  name=""
                  id=""
                  className="mb-2 outline-none border-2 border-black p-2 w-full md:w-[80%]"
                >
                  <option value="">--- Select an Option ---</option>
                  <option value="">Land </option>
                  <option value=""> Air</option>
                  <option value=""> Sea</option>
                </select>
                <br />
                <label htmlFor="" className="text-lg font-semibold">
                  How is your Cargo Packed?
                </label>
                <br />

                <select
                  required
                  name=""
                  id=""
                  className="mb-2 outline-none border-2 border-black p-2 w-full md:w-[80%]"
                >
                  <option value="">--- Select an Option ---</option>
                  <option value="">Cardboard box</option>
                  <option value=""> Wooden box</option>
                  <option value="">European pallet</option>
                  <option value=""> America pallet</option>
                  <option value="">Cargo</option>
                  <option value="">Bidon</option>
                  <option value="">Others</option>
                </select>
                <br />
                <label htmlFor="" className="text-lg font-semibold">
                  Origin - Country
                </label>
                <br />

                <input
                  required
                  name=""
                  id=""
                  className="mb-2 outline-none border-2 border-black p-2 w-full md:w-[80%]"
                />
                <br />
                <label htmlFor="" className="text-lg font-semibold">
                  Destination - Country
                </label>
                <br />

                <input
                  required
                  name=""
                  id=""
                  className="mb-2 outline-none border-2 border-black p-2 w-full md:w-[80%]"
                />
                <br />

                <button
                  type="submit"
                  className="mt-5 outline-none bg-[#FF4800] text-white font-bold p-2 w-full md:w-[80%]"
                >
                  Submit
                </button>
              </section>
            </div>
          </form>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Quote;
