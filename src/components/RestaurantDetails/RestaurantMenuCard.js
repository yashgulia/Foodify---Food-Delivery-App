import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../../config";
import { addItem } from "../../utils/Redux/cartSlice";

const RestaurantMenuCard = (props) => {
  const { description, imageId, name, ratings, defaultPrice, price } = props;

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      <div className="w-auto mx-3 md:mx-1 md:w-[764px] h-44">
        <div className="flex justify-between">
          <div className="text-sm py-1 px-2 w-auto md:w-[552px]">
            <div className="text-[18px] mt-2 font-bold">{name}</div>
            <div className="mt-1 text-base font-semibold">
              ₹{defaultPrice / 100 ? defaultPrice / 100 : price / 100}
            </div>
            <div className="mt-3 text-sm font-semibold text-green-900">
              ⭐️ {ratings?.aggregatedRating?.rating}
            </div>
            <div className="md:hidden text-sm mt-3">
              {description && description.length > 30
                ? description.substr(0, 29) + "..."
                : description}
            </div>
            <div className="hidden md:block text-sm mt-3">
              {description && description.length > 130
                ? description.substr(0, 129) + "..."
                : description}
            </div>
          </div>
          <div className="w-40 ">
            <img
              className=" h-36 w-40 rounded-xl object-cover"
              src={IMG_CDN_URL + imageId}
              alt="menu"
            />
            <div className="h-11 relative left-2/4 bottom-7 z-10 -translate-x-[56px]">
              <button
                onClick={() => addFoodItem(props)}
                className="w-28 h-10 shadow-lg rounded-lg font-extrabold text-lg text-green-600 bg-white"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[764px] border-b-[0.5px] border-gray-500 h-[.5px] mx-2 my-5"></div>
    </div>
  );
};

export default RestaurantMenuCard;
