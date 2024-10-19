import { Link } from "react-router-dom";
import foodify from "../../img/foodify.png";
import useOnline from "../../utils/Hooks/useOnline";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";

const Logo = () => (
  <a href="/">
    <img className="h-24 p-2" alt="logo" src={foodify} />
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

  return (
    <div className="flex justify-between lg:justify-evenly h-28 items-center fixed left-0 right-0 top-0 z-20 bg-white shadow-lg">
      <div>
        <Logo />
      </div>

      {/* Mobile View */}
      <div className="relative p-6  lg:hidden">
        <div className="flex items-center cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Menu */}
        {isOpen && (
          <ul className="absolute top-12 right-0 bg-white shadow-lg border border-gray-200 rounded-lg cursor-pointer">
            <li className="border-b last:border-b-0  hover:bg-green-800">
              <Link
                to="/"
                className="block px-10 py-4 text-lg text-black hover:bg-gray-100 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="border-b last:border-b-0">
              <Link
                to="/about"
                className="block px-10 py-4 text-lg hover:bg-gray-100"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li className="border-b last:border-b-0">
              <Link
                to="/contact"
                className="block px-10 py-4 text-lg hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            <li className="border-b last:border-b-0">
              <Link
                to="/instamart"
                className="block px-10 py-4 text-lg hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Instamart
              </Link>
            </li>
            <li className="border-b last:border-b-0">
              <Link
                to="/search"
                className="block px-10 py-4 text-lg hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="block px-10 py-4 text-lg hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Cart({cartItems.length})
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex">
        <ul className="hidden lg:flex ">
          <li className="px-10 text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="px-10 text-lg">
            <Link to="/about">About</Link>
          </li>
          <li className="px-10 text-lg">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-10 text-lg">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-10 text-lg">
            <Link to="/search">Search</Link>
          </li>
          <li className="px-10 text-lg">
            <Link to="/cart">Cart({cartItems.length})</Link>
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
