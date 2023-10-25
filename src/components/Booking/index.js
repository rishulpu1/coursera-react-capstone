import React from 'react'
import InnerBanner from '../Hero/InnerBanner';
import heroImg from "../../assets/restauranfood.jpg";
import FeaturedProducts from "../featuredProducts/featuredProducts";
function Booking() {
  return (
    <main>
        <InnerBanner 
            HeroTitle = "Little Lemon"
            heroSubTitle = "Reserve a Table"
            heroDesc = {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor i`}
            heroImg = {heroImg}
            imgClassName = "relative mt-8 md:mt-0 md:top-0 rounded-[16px] md:h-[550px]"
            heroImgAlt = "Little Lemon Image"
        />
        <FeaturedProducts />
    
    </main>
  )
}

export default Booking