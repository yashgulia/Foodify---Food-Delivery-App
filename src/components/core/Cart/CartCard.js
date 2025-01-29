import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../../../config";
import { removeItem, addItem } from "../../../Redux/cartSlice";
import { FiMinus, FiPlus } from "react-icons/fi";

const CartCard = (props) => {
  const { id, name, defaultPrice, imageId, price, quantity, description } =
    props;
  const dispatch = useDispatch();

  return (
    <div className="p-10 hover:bg-[#141B2D] transition-colors duration-300">
      <div className="flex gap-5">
        {/* Left Section - Image */}
        <div className="w-[100px] h-[100px] flex-shrink-0 rounded-lg overflow-hidden relative group">
          <img
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            src={IMG_CDN_URL + imageId}
            alt={name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Middle Section - Details */}
        <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
          {/* Name and Description */}
          <div>
            <h3 className="text-[15px] font-medium text-white mb-1">{name}</h3>
            {description && (
              <p className="text-[13px] text-gray-400 line-clamp-1 font-light">
                {description}
              </p>
            )}
          </div>

          {/* Price */}
          <div className="text-[13px] text-gray-300">
            ₹{(defaultPrice || price) / 100} / item
          </div>
        </div>

        {/* Right Section - Controls */}
        <div className="flex flex-col items-end justify-between py-1">
          {/* Item Total */}
          <div className="text-right">
            <div className="text-[11px] uppercase tracking-wider text-gray-400 mb-0.5">
              Subtotal
            </div>
            <div className="text-[14px] font-medium text-white">
              ₹{(((defaultPrice || price) * quantity) / 100).toFixed(2)}
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center bg-[#1A1A1A] rounded-lg border border-green-600/30 p-0.5">
            <button
              className="w-7 h-7 flex items-center justify-center text-green-500 hover:bg-green-600 hover:text-black rounded-md transition-colors duration-300"
              onClick={() => dispatch(removeItem({ id }))}
            >
              <FiMinus size={14} />
            </button>
            <span className="w-8 flex items-center justify-center text-white text-sm">
              {quantity}
            </span>
            <button
              className="w-7 h-7 flex items-center justify-center text-green-500 hover:bg-green-600 hover:text-black rounded-md transition-colors duration-300"
              onClick={() =>
                dispatch(addItem({ id, name, defaultPrice, imageId, price }))
              }
            >
              <FiPlus size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
