import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../Redux/authSlice";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "../../../utils/firebase"; // Firebase config
import { FaGoogle } from "react-icons/fa";

const AuthModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = isSignup
        ? await createUserWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          )
        : await signInWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );

      localStorage.setItem("token", userCredential.user.accessToken);
      dispatch(login());
      onClose();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      localStorage.setItem("token", result.user.accessToken);
      dispatch(login());
      onClose();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white text-black p-6 rounded-lg shadow-lg w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Updated Header */}
        <h2 className="text-3xl font-bold text-center mb-4 border-b border-gray-700 pb-2">
          {isSignup ? "Create an Account" : "Welcome Back"}
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-white bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-white bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500"
          />
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-300"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-red-600 transition-colors duration-300"
        >
          <FaGoogle /> Sign in with Google
        </button>

        <p
          className="text-center text-sm text-gray-700 mt-4 cursor-pointer hover:text-emerald-500"
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup
            ? "Already have an account? Login"
            : "Don't have an account? Sign up"}
        </p>

        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 text-xl"
          onClick={onClose}
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
