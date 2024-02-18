import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { FaOpencart } from "react-icons/fa6";
import { useCartContext } from "../context/CartContext";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { totalItem } = useCartContext();
  const [openSlid, setOpenSlid] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const openBar = () => {
    setOpenSlid(!openSlid);
  };

  const closeBar = () => {
    setOpenSlid(!openSlid);
  };

  return (
    <nav>
      <ul className="hidden lg:flex gap-10 h-14 bg-[#4361dc] px-14 items-center text-white font-serif text-sm">
        <NavLink
          to="/"
          className="active-menu hover:text-[#ff9f43] duration-300"
        >
          <li className="flex items-center gap-1">
            <span className="text-xl">
              <GoHome />
            </span>
            Home
          </li>
        </NavLink>
        <li>
          <NavLink
            to="/about"
            className="active-menu hover:text-[#ff9f43] duration-300"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className="active-menu hover:text-[#ff9f43] duration-300"
          >
            All Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="active-menu hover:text-[#ff9f43] duration-300"
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* OPEN-BAR */}
      <button className="lg:hidden text-2xl text-[#0076e45a]" onClick={openBar}>
        <GiHamburgerMenu />
      </button>

      {/* MOBILE_NAV */}
      <div
        className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[50%] bg-white shadow-lg h-full z-50 duration-300 lg:hidden"
        style={{ left: openSlid ? 0 : "-100%" }}
      >
        <div className="flex justify-between items-center px-3 bg-[#0074e412] h-16">
          <figure className="w-36 h-12 flex justify-center items-center overflow-hidden">
            <img
              src="https://www.bdshop.com/pub/media/default/default/BDSHOP-New-logo-2020-800x800.jpg"
              alt="shoplogo"
              className="h-28 sm:h-36 object-cover"
            />
          </figure>

          {/* CLOSE_BAR */}
          <button
            className="w-10 h-10 rounded-full flex justify-center items-center text-2xl border-2 border-[#0076e45a] text-[#0076e45a] outline-none  lg:hidden"
            onClick={closeBar}
          >
            <MdOutlineClose />
          </button>
        </div>
        <ul className="mt-10 px-10">
          <hr />
          <NavLink
            to="/"
            className="active-menu hover:text-[#ff9f43] duration-300"
          >
            <li
              className="flex items-center gap-1 pl-3 my-3"
              onClick={closeBar}
            >
              <span className="text-xl">
                <GoHome />
              </span>
              Home
            </li>
            <hr />
          </NavLink>
          <li className="pl-3 my-3" onClick={closeBar}>
            <NavLink
              to="/about"
              className="active-menu hover:text-[#ff9f43] duration-300"
            >
              About
            </NavLink>
          </li>
          <hr />
          <li className="pl-3 my-3" onClick={closeBar}>
            <NavLink
              to="/products"
              className="active-menu hover:text-[#ff9f43] duration-300"
            >
              All Products
            </NavLink>
          </li>
          <hr />
          <li className="pl-3 my-3" onClick={closeBar}>
            <NavLink
              to="/contact"
              className="active-menu hover:text-[#ff9f43] duration-300"
            >
              Contact
            </NavLink>
          </li>
          <hr />

          <li className="pl-3 my-3" onClick={closeBar}>
            <NavLink
              to="/cart"
              className="active-menu hover:text-[#ff9f43] duration-300"
            >
              <span className="text-4xl">
                <FaOpencart />
              </span>
            </NavLink>
            <div>
              <p className="text-[12px]">{totalItem} items</p>
            </div>
          </li>
          <hr />
          {/* Login_account */}
          <div className="flex items-center gap-3 pl-3 my-3" onClick={closeBar}>
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                className="bg-blue-500 text-white text-sm px-4 py-2 rounded-sm hover:bg-blue-700 duration-300"
              >
                Log Out
              </button>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className="bg-blue-500 text-white text-sm px-4 py-2 rounded-sm hover:bg-blue-700 duration-300"
              >
                Log In
              </button>
            )}

            <span className="w-8 h-8 rounded-full overflow-hidden">
              {isAuthenticated && <img src={user.picture} alt={user.name} />}
            </span>
          </div>
          <hr />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
