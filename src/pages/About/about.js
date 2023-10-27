import React from 'react'
import InnerBanner from '../../components/Hero/InnerBanner';
import Container from '../../components/Container';
import heroImg from "../../assets/restauranfood.jpg";
import Chicago from '../../components/Chicago';
function About() {
  return (
    <>
      <InnerBanner 
            HeroTitle = "About Us"
            heroSubTitle = "consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            heroDesc = {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor i`}
            heroImg = {heroImg}
            imgClassName = "relative mt-8 md:mt-0 md:top-0 rounded-[16px] md:h-[550px]"
            heroImgAlt = "Little Lemon Image"
        />
        <Container>
          <article>
              <Chicago />
          </article>
        </Container>
    </>
  )
}

export default About;