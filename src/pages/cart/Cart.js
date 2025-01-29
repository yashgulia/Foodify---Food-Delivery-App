import React, { useState } from "react";
import emptyCart from "../../img/empty_cart.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../../components/core/Cart/CartCard";
import { clearCart } from "../../Redux/cartSlice";
import { FaTrash } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import foodify from "../../img/foodify.png";
import AuthModal from "../../components/core/Auth/AuthModal";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const dispatch = useDispatch();

  const totalPrice = Object.values(cartItems).reduce(
    (total, item) =>
      total + ((item.price || item.defaultPrice) * item.quantity) / 100,
    0
  );

  const finalAmount = (totalPrice + 42).toFixed(2); // Total price including fees

  // Razorpay Payment Handler
  const handlePayment = async () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: finalAmount * 100, // Convert to paise
      currency: "INR",
      name: "Foodify",
      description: "Order Payment",
      image: { foodify }, // Your company logo
      handler: async function (response) {
        alert(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        );
        dispatch(clearCart()); // Clear cart after successful payment
      },
      prefill: {
        name: "Test User",
        email: "testuser@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <>
      {/* Show Authentication Modal if not authenticated */}

      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
        />
      )}

      {Object.keys(cartItems).length === 0 ? (
        <div className="flex flex-col min-h-screen py-20 items-center justify-center bg-[#0A0F1C] text-center px-4">
          <div className="w-72 h-64 mb-6">
            <img
              className="w-full h-full object-contain"
              src={emptyCart}
              alt="Empty Cart"
            />
          </div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-400 mb-8">
            You can go to home page to view more restaurants
          </p>
          <Link to="/">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2">
              <BiArrowBack className="text-xl" />
              Back to Restaurants
            </button>
          </Link>
        </div>
      ) : (
        <div className="min-h-screen bg-[#0A0F1C] pt-36 pb-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white">Shopping Cart</h1>
                <p className="text-gray-400 ml-2">
                  {Object.keys(cartItems).length} items in cart
                </p>
              </div>
              <button
                className="flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500/20 transition-colors duration-300"
                onClick={() => dispatch(clearCart())}
              >
                <FaTrash />
                Clear Cart
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 ">
                <div className="bg-[#0D1321] rounded-lg overflow-hidden">
                  {Object.values(cartItems).map((item, index) => (
                    <div
                      key={item.id}
                      className={
                        index !== Object.values(cartItems).length - 1
                          ? "border-b border-gray-800"
                          : ""
                      }
                    >
                      <CartCard {...item} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-[#0D1321] rounded-lg p-6 sticky top-24">
                  <h2 className="text-xl font-semibold text-white mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-400">
                      <span>Subtotal</span>
                      <span className="text-white">
                        ₹{totalPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Delivery Fee</span>
                      <span className="text-white">₹40.00</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Platform Fee</span>
                      <span className="text-white">₹2.00</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-800 pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-white font-medium">
                        Total
                      </span>
                      <span className="text-lg text-white font-bold">
                        ₹{finalAmount}
                      </span>
                    </div>
                  </div>

                  <button
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors duration-300 font-medium"
                    onClick={handlePayment}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
