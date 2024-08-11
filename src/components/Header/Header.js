import { Link } from "react-router-dom";
import foodify from "../../img/foodify.png";

const Logo = () => (
  <a href="/">
    <img className="h-20 p-2" alt="logo" src={foodify} />
  </a>
);

const Header = () => {
  return (
    <div className="flex justify-evenly items-center sticky shadow-lg">
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
            <Link to="/cart">Cart(0)</Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <h4 className="px-10 text-lg">Sign In</h4>
        <h4 className="px-4">🟢</h4>
      </div>
    </div>
  );
};
export default Header;
