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
      <div className="">
        <div className="w-[768px] h-44">
          <div className="flex justify-between">
            <div className="text-sm py-1 w-[552px]">
              <div className="text-[18px] mt-2 font-bold">{name}</div>
              <div className="mt-1 text-base font-semibold">
                ₹{defaultPrice / 100 ? defaultPrice / 100 : price / 100}
              </div>
              <div className="mt-3 text-sm font-semibold text-green-900">
                ⭐️ {ratings?.aggregatedRating?.rating}
              </div>
              <div className="text-sm mt-3">
                {description && description.length > 130
                  ? description.substr(0, 129) + "... more"
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
        <div className="w-[768px] border-b-[0.5px] border-gray-500 h-[.5px] my-5"></div>
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
