import React, { useEffect, useState } from 'react'
// import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Footer from './Footer'
import BannerSlider from './BannerSlider'
import PromoSlider from './PromoSlider'

function AllComp() {
 

  return (
    <div className='w-[100%] '>


      <BannerSlider />

      <PromoSlider />
      <HeroSection />
      <Footer />
     
    </div>
  )
}

export default AllComp



