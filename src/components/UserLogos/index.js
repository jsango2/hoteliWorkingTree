import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  UserLogosWrap,
  Adeo,
  Amabilis,
  Amare,
  Amerun,
  Bevanda,
  Crystal,
  FortyFour,
  Hostin,
  KanjonZrmanja,
  KulinAblana,
  Martinis,
  SanGiorgio,
  SanRocco,
  Tolero,
  Vitar,
} from "./styles.js"

const settings = {
  // dots: false,
  // infinite: true,
  // slidesToShow: 2,
  // slidesToScroll: 1,
  // autoplay: true,
  // speed: 2000,
  // autoplaySpeed: 2000,
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  className: "testimonialSlider",
  speed: 3000,
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "cubic-bezier(.43,.39,.33,.94)",
        className: "testimonialSlider",
        speed: 1500,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        rows: 2,
        slidesPerRow: 1,
        cssEase: "linear",
        className: "testimonialSlider",
        speed: 4500,
      },
    },
  ],
}

const UserLogos = () => {
  return (
    <UserLogosWrap>
      <Slider {...settings}>
        <Adeo />
        <Amabilis />
        <Amerun />
        {/* <Crystal /> */}
        <FortyFour />
        <Hostin />
        <KanjonZrmanja />
        <KulinAblana />
        <Martinis />
        <SanGiorgio />
        <SanRocco />
        {/* <Bevanda /> */}
        <Tolero />
        <Vitar />
        <Martinis />
        <Amare />
      </Slider>
    </UserLogosWrap>
  )
}

export default UserLogos
