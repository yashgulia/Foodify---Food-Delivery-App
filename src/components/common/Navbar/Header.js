import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Redux/authSlice";
import AuthModal from "../../core/Auth/AuthModal";
import { signOut } from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaSearch } from "react-icons/fa";
import foodify from "../../../img/foodify.png";

const Logo = () => (
  <a href="/">
    <img
      className="h-24 p-2 brightness-125 hover:scale-110 transition-all duration-300"
      alt="logo"
      src={foodify}
    />
  </a>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const cartItems = useSelector((store) => store.cart.items);
  const cartCount = Object.keys(cartItems).length;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex justify-between items-center px-6 py-1 fixed top-0 w-full z-50 bg-gradient-to-r from-richblack-900 to-emerald-950 text-white shadow-lg border-b border-emerald-700">
      <Logo />

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        <Link to="/" className="hover:text-emerald-400 transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-emerald-400 transition">
          About
        </Link>
        <Link to="/contact" className="hover:text-emerald-400 transition">
          Contact
        </Link>
        <Link to="/instamart" className="hover:text-emerald-400 transition">
          Instamart
        </Link>
        <Link to="/search" className="hover:text-emerald-400 transition">
          <FaSearch />
        </Link>

        <Link to="/cart" className="relative">
          <FaShoppingCart className="text-2xl hover:text-emerald-400 transition" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-green-800 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>

        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => setShowAuthModal(true)}
            className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition"
          >
            Login
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      <button className="lg:hidden text-xl" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-gradient-to-r from-richblack-900 to-emerald-950 text-white border-b border-emerald-700 shadow-md lg:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li>
              <Link
                to="/"
                className="block hover:text-emerald-400 transition"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-emerald-400"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-emerald-400"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/instamart"
                className="hover:text-emerald-400"
                onClick={toggleMenu}
              >
                Instamart
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="relative flex items-center"
                onClick={toggleMenu}
              >
                <FaShoppingCart className="text-xl hover:text-emerald-400" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 ml-2 bg-green-800 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="w-full px-6 py-1 text-red-500 hover:bg-red-500/10 transition rounded-lg"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowAuthModal(true);
                    toggleMenu();
                  }}
                  className="w-full px-6 py-3 text-emerald-500 hover:bg-emerald-500/10 transition rounded-lg"
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      )}

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
        />
      )}
    </header>
  );
};

export default Header;
