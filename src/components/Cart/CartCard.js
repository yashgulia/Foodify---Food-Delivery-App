import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../../config";
import { removeItem, addItem } from "../../utils/Redux/cartSlice";

const CartCard = (props) => {
  const { id, name, defaultPrice, imageId, price, quantity } = props;

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(addItem({ id, name, defaultPrice, imageId, price }));
  };

  const handleDecrement = () => {
    dispatch(removeItem({ id }));
  };

  return (
    <>
      <div className="flex justify-start p-2">
        <div className="p-2 m-2 w-56">
          <img
            className="shadow-xl h-36 w-40 rounded-xl object-cover"
            src={IMG_CDN_URL + imageId}
            alt={name}
          />
        </div>
        <div className="w-96">
          <h3 className="font-bold text-lg mt-7">{name}</h3>
          <div className="flex justify-between items-center mt-4">
            <h5>₹ {defaultPrice / 100 ? defaultPrice / 100 : price / 100}</h5>
            <div className="font-bold border shadow-lg border-green-700 rounded-lg w-16 h-9 flex justify-between">
              <button
                className="p-1 text-green-700"
                onClick={() => handleDecrement(id)}
              >
                -
              </button>
              <p className="p-1">{quantity}</p>
              <button
                className="p-1 text-green-700"
                onClick={() => handleIncrement(id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[768px] border-b-[0.5px] border-black h-[.5px] my-5"></div>
    </>
  );
};

export default CartCard;
