import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_all_banners } from '../Store/Service/BannerService';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/keyboard'; // Keyboard module
import '../App.css';

// Import Swiper modules
import { Pagination, Navigation, Keyboard } from 'swiper/modules';

import './BannerSlider.css'; // Custom CSS file for additional styles

function BannerSlider() {
  const [data, setData] = useState([]);
  const { get_all_banners_status, get_all_banners_data } = useSelector((state) => state.banners);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_all_banners());
  }, [dispatch]);

  useEffect(() => {
    if (get_all_banners_data) {
      setData(get_all_banners_data.data);
    }
  }, [get_all_banners_data]);

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true} // Navigation enabled
        keyboard={true} // Enable keyboard support
        modules={[Pagination, Navigation, Keyboard]} // Include Keyboard module
        className="mySwiper cursor-grab"
      >
        {data?.map((v, i) => {
          return (
            <SwiperSlide key={i}>
              <div
                style={{ position: 'relative', width: '100%' }}
                className='md:h-[600px] h-[350px]'
              >
                {/* Image */}
                <img src={v.imageUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                {/* Text Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    zIndex: '1',
                    color: 'white',
                    padding: '20px',
                    fontWeight: 'bolder',
                  }}
                  className='md:text-[44px] text-[30px]'
                >
                  <p>{v.name}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Navigation buttons are auto-generated */}
    </>
  );
}

export default BannerSlider;
