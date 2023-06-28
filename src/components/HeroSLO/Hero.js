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
import Form2 from "../Form/form2SLO.js"

const Hero = () => {
  return (
    <HeroWrap>
      <HeroOverlay />
      <LogoHero href="https://www.rentl.io/en">
        <img src="/images/RentlioLogo.svg" alt="Logo" />
      </LogoHero>
      <HeroTitle>Rentlio Pro</HeroTitle>
      <HeroSubTitle> #1 rešitev v oblaku za hotele v regiji SEE</HeroSubTitle>
      <div>
        <HeroParagraph>
          Rentilio Pro je sodobna rešitev v oblaku kot sistem za upravljanje
          nepremičnin (PMS), upravljavec kanalov in rezervacijski sistem,
          namenjena hotelom vseh vrst in velikosti. Produkt je rešitev,
          namenjena poenostavitvi in avtomatizaciji vseh aktivnosti sodobnih
          hotelirjev in njihovih gostov.
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
