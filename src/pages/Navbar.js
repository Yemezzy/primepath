import React from 'react'
import { Link } from 'react-router-dom';
import {
  FaAngleRight,
  FaBars,
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
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
// import PersonAdd from "@mui/icons-material/PersonAdd";
// import Settings from "@mui/icons-material/Settings";
// import Logout from "@mui/icons-material/Logout";

const Navbar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


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
            <a href="mailto:info@primepath.pro">info@primepath.pro</a>
          </p>
        </section>

        <div className="flex px-5 md:px-16 md:py-3 py-5 items-center justify-between">
          <section className="flex text-[#FF4800] text-2xl gap-2 font-extrabold text-center md:text-3xl">
            <FaTruck className=" text-4xl" />
            <p>PRIMEPATH</p>
          </section>

          <section>
            <ul className="md:flex hidden gap-10 font-bold">
              <Link to="/">
                <li className="">Home</li>
              </Link>
              <Link to="/about-us">
                <li className="">About</li>
              </Link>
              <Link to="/services">
                <li className="">Services</li>
              </Link>
              <Link to="/contact-us">
                <li className="">Contact Us</li>
              </Link>
            </ul>
          </section>

          <Link to="/get-a-quote">
            <button className="px-7 md:block hidden py-2 text-sm font-semibold text-white bg-[#FF4800]">
              Get A Quote
            </button>
          </Link>
          <Link className="md:hidden block">
            <button
              onClick={handleClick}
              className="px-7  text-2xl py-2 font-semibold text-[#FF4800]"
            >
              <FaBars />
            </button>
          </Link>
        </div>
      </nav>

      <React.Fragment>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          // PaperProps={{
          //   elevation: 0,
          //   sx: {
          //     overflow: "visible",
          //     filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          //     mt: 1.5,
          //     "& .MuiAvatar-root": {
          //       width: 32,
          //       height: 32,
          //       ml: -0.5,
          //       mr: 1,
          //     },
          //     "&::before": {
          //       content: '""',
          //       display: "block",
          //       position: "absolute",
          //       top: 0,
          //       right: 14,
          //       width: 10,
          //       height: 10,
          //       bgcolor: "background.paper",
          //       transform: "translateY(-50%) rotate(45deg)",
          //       zIndex: 0,
          //     },
          //   },
          // }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <Link to="/">HOME</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/about-us">ABOUT</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/services">SERVICES</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/contact-us">CONTACT US</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/get-a-quote">GET A QUOTE</Link>
          </MenuItem>
        </Menu>
      </React.Fragment>
    </div>
  );
}

export default Navbar