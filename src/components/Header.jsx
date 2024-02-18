import React from "react";
import { FaOpencart } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useAuth0 } from "@auth0/auth0-react";
import { useFilterContext } from "../context/FilterContext";

const Header = () => {
  // USECART_CONTEXT
  const { totalItem } = useCartContext();
  // USEFILTER_CONTEXT
  const {
    filters: { text },
    updateFilterValue,
  } = useFilterContext();
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <div className=" bg-[#ffffff]  shadow-md flex justify-between items-center px-5 sm:px-10 lg:px-0 lg:block">
      <div className="w-full h-20 flex lg:justify-evenly items-center">
        {/* Shop_logo */}
        <figure className="w-36 h-12 flex justify-center items-center overflow-hidden">
          <img
            src="https://www.bdshop.com/pub/media/default/default/BDSHOP-New-logo-2020-800x800.jpg"
            alt="shoplogo"
            className="h-28 sm:h-36 object-cover"
          />
        </figure>
        {/* Find_Products */}
        <div className="hidden lg:flex items-center w-5/12 h-12 rounded-md bg-[#93c7f161] border-[#000] outline-none  px-5 gap-2">
          <span className="text-2xl text-[#74b9ff]">
            <FiSearch />
          </span>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="text"
              value={text}
              onChange={updateFilterValue}
              placeholder="Find your products"
              autoComplete="off"
              className="bg-transparent w-full outline-none placeholder:text-[#000] font-serif font-medium"
            />
          </form>
        </div>
        {/* Cart */}
        <div className="hidden lg:flex gap-3 items-center">
          <NavLink
            to="/cart"
            className="active-menu hover:text-[#ff9f43] duration-300"
          >
            <span className="text-4xl">
              <FaOpencart />
            </span>
          </NavLink>
          <div>
            <p className="text-sm">Cart items</p>
            <p className="text-[12px]">{totalItem} items</p>
          </div>
        </div>
        {/* Login_account */}
        <div className="hidden lg:flex items-center gap-3">
          <span className="w-9 h-9 rounded-full overflow-hidden">
            {isAuthenticated && <img src={user.picture} alt={user.name} />}
          </span>
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
        </div>
      </div>

      {/* NAV_MENU */}
      <Navbar />
    </div>
  );
};

export default Header;
