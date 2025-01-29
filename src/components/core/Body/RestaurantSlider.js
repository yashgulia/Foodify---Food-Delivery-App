import React from "react";
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const RestaurantSlider = ({ restaurants }) => {
  return (
    <div className="mb-12 w-11/12 mx-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="restaurant-slider px-4"
      >
        {restaurants.map((restaurant) => (
          <SwiperSlide key={restaurant?.info?.id}>
            <Link to={"/restaurant/" + restaurant?.info?.id}>
              <div className="relative group rounded-xl overflow-hidden">
                <div className="aspect-[5/3]">
                  <img
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    src={IMG_CDN_URL + restaurant?.info?.cloudinaryImageId}
                    alt={restaurant?.info?.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-medium mb-1 truncate">
                    {restaurant?.info?.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="flex items-center gap-1 bg-green-600 px-2 py-0.5 rounded">
                      <span>★</span>
                      {restaurant?.info?.avgRating}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span>
                      {restaurant?.info?.cuisines?.slice(0, 2).join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RestaurantSlider;
