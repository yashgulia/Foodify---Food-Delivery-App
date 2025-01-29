import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../../Redux/cartSlice";
import { IMG_CDN_URL } from "../../../config";

const RestaurantMenuCard = (item) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  // Get quantity of this item from cart
  const quantity = cartItems[item?.id]?.quantity || 0;

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(item));
  };

  return (
    <div className="flex justify-between p-6 gap-4">
      {/* Left side - Item Details */}
      <div className="flex-1">
        <h3 className="text-xl font-medium text-gray-200 mb-1">{item?.name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-base text-gray-200">
            ₹{item?.price / 100 || item?.defaultPrice / 100}
          </span>
          {item?.ratings?.aggregatedRating?.rating && (
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-300">
                {item?.ratings?.aggregatedRating?.rating}
              </span>
            </div>
          )}
        </div>
        {/* Nutritional Info in gray */}
        <p className="text-sm text-gray-500 mt-4 leading-relaxed">
          {item?.description ||
            `${item?.category} (Energy: ${
              item?.nutritionalInfo?.energy || "N/A"
            }, 
            Carbohydrates: ${item?.nutritionalInfo?.carbohydrates || "N/A"}, 
            Protein: ${item?.nutritionalInfo?.protein || "N/A"}, 
            Fat: ${item?.nutritionalInfo?.fat || "N/A"})`}
        </p>
      </div>

      {/* Right side - Image and Add Button */}
      <div className="relative w-[140px]">
        {item?.imageId && (
          <div className="relative w-[140px] h-[100px] rounded-lg overflow-hidden bg-richblack-800">
            <img
              className="w-full h-full object-cover"
              src={IMG_CDN_URL + item?.imageId}
              alt={item?.name}
            />
          </div>
        )}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24">
          {quantity > 0 ? (
            <div className="flex items-center justify-between bg-black border border-green-600 rounded-md overflow-hidden">
              <button
                className="px-3 py-1 text-green-600 hover:bg-green-600 hover:text-black transition-colors duration-300"
                onClick={handleRemoveItem}
              >
                -
              </button>
              <span className="text-green-600 font-medium">{quantity}</span>
              <button
                className="px-3 py-1 text-green-600 hover:bg-green-600 hover:text-black transition-colors duration-300"
                onClick={handleAddItem}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="w-full bg-black text-green-600 border border-green-600 px-4 py-1 text-sm font-medium rounded-md hover:bg-green-600 hover:text-black transition-colors duration-300"
              onClick={handleAddItem}
            >
              ADD
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
