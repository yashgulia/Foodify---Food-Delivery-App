import React from "react";
import emptyCart from "../img/empty_cart.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartCard from "./RestaurantDetails/Cart/CartCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return cartItems.length == 0 ? (
    <div className="flex flex-col h-screen w-screen items-center justify-center text-center">
      <div>
        <img className="w-72 h-64 object-cover" src={emptyCart} alt="Cart" />
      </div>
      <div className="mt-6 text-xl font-semibold text-[#535665]">
        Your cart is empty
      </div>
      <div className="mt-2 text-[#7e808c] font-light">
        You can go to home page to view more restaurants
      </div>
      <div className="mt-8 text-white font-semibold text-base">
        <Link to="/">
          <button className="border border-black bg-green-900 px-5 py-3">
            SEE RESTAURANTS NEAR YOU
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="mx-80 my-10">
      <h1 className="font-semibold">Cart Items - {cartItems.length}</h1>
      <div className="">
        {cartItems.map((item) => (
          <CartCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
