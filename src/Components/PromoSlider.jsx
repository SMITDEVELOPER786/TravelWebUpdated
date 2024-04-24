import React, { useEffect, useState, useRef  } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img from "../Components/Assits/gettyimages-1439807599-640x640.jpg";
import { useDispatch, useSelector } from "react-redux";
import { get_all_promos } from "../Store/Service/PromoService";
import "../App.css";
function PromoSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,

        },
      },
    ],
  };

  const [data, setData] = useState([]);
  const { get_all_promos_status, get_all_promos_data } = useSelector(
    (state) => state.promos
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_all_promos());
  }, [dispatch]);

  // useEffect(() => {
  //   if (get_all_promos_data) {
  //     setData(get_all_promos_data.data);
  //   }
  // }, [get_all_promos_data]);

  console.log(data);
  // React references ko slider controls ke liye istemal karen
  const sliderRef = React.useRef(null);

  // Ensure karen ke reference null na ho jab buttons use karen
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };  


  return (
    <>
<div className="flex justify-between items-center px-5 mt-4 md:mt-8">
  <div className="relative inline-block font-quicksand">
    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
      Promotional Offers
    </h2>
    <div className="absolute bottom--1 left-0 w-1/2 h-1 rounded-full bg-[#38bdf8]"></div>
  </div>

  <div className="flex space-x-4">
    <button
      className="bg-gray-200 hover:bg-[#38bdf8] hover:text-white px-3 p-2 rounded-full"
      aria-label="Previous"
      onClick={handlePrev} // Arrow button ke click handler
    >
      <i className="fas fa-arrow-left"></i> {/* Font Awesome icon */}
    </button>
    <button
      className="bg-gray-200 hover:bg-[#38bdf8] hover:text-white px-3 p-2 rounded-full"
      aria-label="Next"
      onClick={handleNext} // Arrow button ke click handler
    >
      <i className="fas fa-arrow-right"></i> {/* Font Awesome icon */}
    </button>
  </div>
</div>
      <div className=" w-full overflow-hidden my-5">
        <Slider {...settings} ref={sliderRef} className="cursor-grab">
          {get_all_promos_data?.map((v, i) => {
            return (
              <>
                <div className="px-5">
                  <div class="max-w-sm rounded h-[450px] overflow-x-hidden scrollbar-none shadow-lg border ">
                    <img
                      class="w-full h-60 object-fill"
                      src={v.imageUrl}
                      alt="Sunset in the mountains"
                    />
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2">{v.title}</div>
                      <p class="text-gray-700 text-base ">{v.description}</p>
                      <p class="text-gray-700 text-base">{v.terms_condition}</p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {v.promo_code}
                      </span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {v.minimum_claim_price}
                      </span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {v.promo_discount_price}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default PromoSlider;
