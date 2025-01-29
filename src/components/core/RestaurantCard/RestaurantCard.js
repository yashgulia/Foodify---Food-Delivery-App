import { IMG_CDN_URL } from "../../../config";
const RestaurantCard = ({
  name,
  avgRating,
  cuisines,
  cloudinaryImageId,
  areaName,
}) => {
  return (
    <div className="relative group transition-all duration-300 ">
      <div className="grid grid-cols-2 md:h-[350px] hover:bounce-delay md:grid-cols-1 gap-3 mb-12 md:mb-0 p-4 rounded-xl border group-hover:border-emerald-700 group-hover:shadow-[0px_3px_30px_5px] group-hover:shadow-emerald-700 shadow-[0px_3px_30px_5px] group-hover:transition-all group-hover:duration-400 group-hover:ease-in-out group-hover:translate-y-[-10px] shadow-emerald-200 ">
        <div className="grid-rows-7 justify-self-center">
          <img
            className="w-44 h-36 transition md:w-60 md:h-40 object-cover rounded-2xl shadow-lg brightness-100 "
            src={IMG_CDN_URL + cloudinaryImageId}
            alt={name}
          />
        </div>
        <div className="md:ml-3 grid-rows-5 ">
          <h3 className="font-bold text-white text-base md:text-lg mb-1 md:mb-0">
            {name.length > 20 ? name.substr(0, 20) + "..." : name}
          </h3>
          <h4 className="font-semibold text-pure-greys-100 mb-1 md:mb-0">
            ⭐️ {avgRating}
          </h4>
          <h5 className="text-pure-greys-100">
            {cuisines.join(", ").length > 28
              ? cuisines.join(", ").substr(0, 29) + "..."
              : cuisines.join(", ")}
          </h5>
          <h5 className="text-pure-greys-100">{areaName}</h5>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
