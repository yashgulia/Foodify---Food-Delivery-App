import { Link } from "react-router-dom";
import foodify from "../../../img/foodify.png";
import useOnline from "../../../Hooks/useOnline";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";

const Logo = () => (
  <a href="/">
    <img
      className="h-28 p-2 brightness-125 hover:scale-110 transition-all duration-300"
      alt="logo"
      src={foodify}
    />
  </a>
);

const Header = () => {
  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const totalItemsInCart = Object.values(cartItems).reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="flex justify-between lg:justify-evenly h-28 w-screen items-center fixed left-0 right-0 top-0 z-20 bg-richblack-900 text-white border-b-[1px] border-b-richblack-700 shadow-[-10px_5px_10px_-2px] shadow-caribbeangreen-300">
      <div>
        <Logo />
      </div>

      {/* Mobile View */}
      <div className="relative p-6 lg:hidden">
        {/* Hamburger Button */}
        <div
          className="flex items-center cursor-pointer text-emerald-600 hover:text-emerald-500 transition-colors duration-300"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-14 right-0 w-64 bg-richblack-900 border border-emerald-700/30 rounded-lg shadow-lg shadow-emerald-700/20 py-2 z-50">
            <li className="border-b border-emerald-700/30 last:border-b-0">
              <Link
                to="/"
                className="block px-6 py-3 text-emerald-600 hover:bg-emerald-600/10 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="border-b border-emerald-700/30 last:border-b-0">
              <Link
                to="/about"
                className="block px-6 py-3 text-emerald-600 hover:bg-emerald-600/10 transition-colors duration-200"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li className="border-b border-emerald-700/30 last:border-b-0">
              <Link
                to="/contact"
                className="block px-6 py-3 text-emerald-600 hover:bg-emerald-600/10 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            <li className="border-b border-emerald-700/30 last:border-b-0">
              <Link
                to="/instamart"
                className="block px-6 py-3 text-emerald-600 hover:bg-emerald-600/10 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Instamart
              </Link>
            </li>
            <li className="border-b border-emerald-700/30 last:border-b-0">
              <Link
                to="/cart"
                className="block px-6 py-3 text-emerald-600 hover:bg-emerald-600/10 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Cart({totalItemsInCart})
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsLoggedIn(!isLoggedIn);
                  toggleMenu();
                }}
                className="w-full text-left px-6 py-3 text-emerald-600 hover:bg-emerald-600/10 transition-colors duration-200"
              >
                {isLoggedIn ? "Sign Out" : "Sign In"}
              </button>
            </li>
          </ul>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex">
        <ul className="hidden lg:flex ">
          <li className="px-10 text-xl relative group text-emerald-600 hover:scale-110 transition-all duration-300">
            <Link to="/" className="block pb-2">
              Home
            </Link>
            <span className="absolute left-4 bottom-0 w-0 h-0.5 bg-emerald-600 group-hover:w-3/4 transition-all duration-300"></span>{" "}
          </li>

          <li className="px-10 text-xl relative group text-emerald-600 hover:scale-110 transition-all duration-300">
            <Link to="/about" className="block pb-2">
              About
            </Link>
            <span className="absolute left-4 bottom-0 w-0 h-0.5 bg-emerald-600 group-hover:w-3/4 transition-all duration-300"></span>{" "}
          </li>

          <li className="px-10 text-xl relative group text-emerald-600 hover:scale-110 transition-all duration-300">
            <Link to="/contact" className="block pb-2">
              Contact
            </Link>
            <span className="absolute left-4 bottom-0 w-0 h-0.5 bg-emerald-600 group-hover:w-3/4 transition-all duration-300"></span>{" "}
          </li>

          <li className="px-10 text-xl relative group text-emerald-600 hover:scale-110 transition-all duration-300">
            <Link to="/instamart" className="block pb-2">
              Instamart
            </Link>
            <span className="absolute left-4 bottom-0 w-0 h-0.5 bg-emerald-600 group-hover:w-3/4 transition-all duration-300"></span>{" "}
          </li>

          <li className="px-10 text-xl relative group text-emerald-600 hover:scale-110 transition-all duration-300">
            <Link to="/search" className="block pb-2">
              Search
            </Link>
            <span className="absolute left-4 bottom-0 w-0 h-0.5 bg-emerald-600 group-hover:w-3/4 transition-all duration-300"></span>{" "}
          </li>
          <li className="px-10 text-xl relative group text-emerald-600 hover:scale-110 transition-all duration-300">
            <Link to="/cart" className="block pb-2">
              Cart({totalItemsInCart})
            </Link>
            <span className="absolute left-4 bottom-0 w-0 h-0.5 bg-emerald-600 group-hover:w-3/4 transition-all duration-300"></span>{" "}
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex">
        {isLoggedIn ? (
          <button
            onClick={() => setIsLoggedIn(false)}
            className="px-10 text-lg"
          >
            Sign Out
          </button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)} className="px-10 text-lg">
            Sign In
          </button>
        )}
        <h4 className="px-4">{isOnline ? "🟢" : "🔴"}</h4>
      </div>
    </div>
  );
};
export default Header;
