import React, { useEffect, useState } from "react";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img from "../Components/Assits/gettyimages-1439807599-640x640.jpg";
// import herobanner from "../assists/pngtree-globe-trotting-in-3d-exploring-the-world-by-airplane-image_3687653.jpg"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { activities_async, categories_async } from "../Store/Service/AuthService";
import { useDispatch, useSelector } from "react-redux";

function HeroSection() {
  const dispatch = useDispatch();
  const { activities_data ,categories_data,login_data} = useSelector((state) => state.auth);
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
        },
      },
    ],
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(activities_async());
      } catch (error) {
        // Handle any errors
        console.error("Error fetching activities:", error);
      }
    };

    const fatch_categories_data = async () => {
      try {
        await dispatch(categories_async());
      } catch (error) {
        // Handle any errors
        console.error("Error fetching categories:", error);
      }
    };

    fetchData(); // Call the async function
    fatch_categories_data();
  }, []);

  console.log(activities_data);

  return (
    <>
      {/* <div className="hero">

        <div className="flex flex-col justify-center items-center w-full h-full gap-5">
          <h1 className="text-white text-4xl">Hi you, where are you going?</h1>
          <div className="w-full md:flex  hidden justify-center items-center gap-5">
            <div className="p-2 flex flex-col items-center">
              <img
                className="w-16"
                src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit9696gsm/vertical/2024/01/04/f9931813-e0a3-47b7-bb53-55d2fe7acaa6-1704354023146-5a48b20ec9ebba3c881e374eec30097e.png"
                alt=""
              />
              <h1 className="text-white font-semibold">AirCarft</h1>
            </div>
            <div className="p-2 flex flex-col items-center">
              <img
                className="w-16"
                src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit9696gsm/vertical/2024/01/04/f9931813-e0a3-47b7-bb53-55d2fe7acaa6-1704354023146-5a48b20ec9ebba3c881e374eec30097e.png"
                alt=""
              />
              <h1 className="text-white font-semibold">AirCarft</h1>
            </div>
            <div className="p-2 flex flex-col items-center">
              <img
                className="w-16"
                src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit9696gsm/vertical/2024/01/04/f9931813-e0a3-47b7-bb53-55d2fe7acaa6-1704354023146-5a48b20ec9ebba3c881e374eec30097e.png"
                alt=""
              />
              <h1 className="text-white font-semibold">AirCarft</h1>
            </div>
            <div className="p-2 flex flex-col items-center">
              <img
                className="w-16"
                src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit9696gsm/vertical/2024/01/04/f9931813-e0a3-47b7-bb53-55d2fe7acaa6-1704354023146-5a48b20ec9ebba3c881e374eec30097e.png"
                alt=""
              />
              <h1 className="text-white font-semibold">AirCarft</h1>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="bg-gray-300 flex justify-center items-center">
        <h1>tiket.com - One application for your holiday needs.</h1>
      </div> */}

      <div className="px-5 mx-auto">
      <div className=" py-5 md:py-10">
  <h2 className="text-lg sm:text-sm md:text-xl lg:text-2xl font-bold  relative inline-block font-quicksand">
  Check the popular ones at Travel.com! 🏆🤩
    <div className="absolute bottom--1  left-0 w-1/2 h-1 rounded-full bg-[#38bdf8]"></div>
  </h2>
</div>
        
        <Tabs className={`font-semibold `}>
          <TabList className={`flex items-baseline border-b-2 md:text-[16px] text-[10px]`}>
            <Tab >Activities</Tab>
            <Tab>Destinations</Tab>
            <Tab>Travel Deals</Tab>
          </TabList>

          <TabPanel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 font-mono">
     

              {activities_data?.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 font-mono">
     

          {activities_data?.slice().reverse().map((activity) => (
   <ActivityCard key={activity.id} activity={activity} />
))}

   </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 font-mono">
     

              {activities_data?.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>



      {/* <div>
        <div className=" w-[98%]">
          <Slider {...settings}>
            <div className="px-5">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full " src={img} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
            <div className="px-5">
              {" "}
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={img} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
            <div className="px-5">
              {" "}
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={img} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
            <div className="px-5">
              {" "}
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={img} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
            <div className="px-5">
              {" "}
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={img} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
            <div className="px-5">
              {" "}
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={img} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
            <div className="px-5">
              {" "}
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={img} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
            <div className="px-5">
              {" "}
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={img} alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div> */}


{/* cat start */}
<div className="relative px-5 md:py-10 py-5">
  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold  relative inline-block font-quicksand">
    Featured Categories
    <div className="absolute bottom--1 left-0 w-1/2 h-1 rounded-full bg-[#38bdf8]"></div> {/* Border */}
  </h2>
</div>


<div className=" my-1 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
      {categories_data?.map(category => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>

{/* cat end */}


    </>
  );
}

export default HeroSection;

const ActivityCard = ({ activity }) => {
  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg mt-4">
       <img
      className="w-full h-[230px] object-cover"
      src={activity.imageUrls && activity.imageUrls[0] ? activity.imageUrls[0] : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1eU8B6-zuqVWEQ9oMFsRq_J7JbU4HGxw0bU_ypKgJmg&s`}
      alt={activity.title || 'Default Image'}
    />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{activity.title}</div>
        <p className="text-gray-700 text-base line-clamp-4">
  {activity.description}
</p>

      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Price: {activity.price}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Rating: {activity.rating}
        </span>
      </div>
    </div>
  );
};

const CategoryCard = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-xs cursor-grab rounded-md border  overflow-hidden shadow-lg mx-auto my-4 transition-transform duration-300 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className={`w-[290px] object-cover h-48 duration-700 ${isHovered ? 'scale-100' : ''}`}
        src={category.imageUrl}
        alt={category.name}
      />
      <div className="px-6 py-2 flex flex-col justify-center" style={{ height: '3rem' }}>
        <div className="font-bold font-quicksand text-lg mb-1 text-center overflow-hidden overflow-ellipsis whitespace-nowrap">
          {category.name}
        </div>
      </div>
    </div>
  );
};