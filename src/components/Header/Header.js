import { Link } from "react-router-dom";
import foodify from "../../img/foodify.png";
import useOnline from "../../utils/Hooks/useOnline";
import { useState } from "react";
import { useSelector } from "react-redux";

const Logo = () => (
  <a href="/">
    <img className="h-20 p-2" alt="logo" src={foodify} />
  </a>
);

const Header = () => {
  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex justify-evenly items-center sticky top-0 z-20 bg-white shadow-lg">
      <Logo />
      <div>
        <ul className="flex">
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
      <div className="flex">
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
