import React from "react"

import {
  HeroWrap,
  HeroOverlay,
  LogoHero,
  HeroTitle,
  HeroParagraph,
  HeroSubTitle,
  HeroParagraph2,
} from "./styles.js"
import Form2 from "../Form/form2eng.js"

const Hero = () => {
  return (
    <HeroWrap>
      <HeroOverlay />
      <LogoHero href="https://www.rentl.io/en">
        <img src="/images/RentlioLogo.svg" alt="Logo" />
      </LogoHero>
      <HeroTitle>Rentlio Pro</HeroTitle>
      <HeroSubTitle>
        {" "}
        #1 cloud hospitality solution in the SEE region
      </HeroSubTitle>
      <div>
        <HeroParagraph>
          Rentilio Pro is a modern cloud PMS, Channel Manager, and Booking
          Engine solution for hotels of all types and sizes. The product is a
          solution designed to simplify and automate all operations of modern
          hoteliers and their guests.
        </HeroParagraph>
      </div>

      <Form2
        top="510px"
        right="130px"
        bg={true}
        bgColor="#ffff"
        border="1px solid #eaeaea"
        title={true}
        overlayBottom="-406px"
        overlayRight="150px"
      />
    </HeroWrap>
  )
}

export default Hero
