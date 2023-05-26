import React, { useState } from "react"
import { WrapClientsSection, Title, Cards } from "./styles.js"
import Kosir from "../../../static/images/fotoGuy.png"
import Zovko from "../../../static/images/Zovko.png"
import Auero from "../../../static/images/Auero.png"

import Card from "./Card.js"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import useWindowSize from "../helper/useWindowSize"

const Clients = () => {
  const size = useWindowSize()
  const settings = {
    // arrows: true,
    dots: true,
    infinite: true,
    lazyLoad: true,
    fade: true,
    speed: 1000,
    autoplaySpeed: 6000,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 450,
    //     settings: {
    //       dots: true,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       lazyLoad: true,
    //       arrows: false,
    //       speed: 500,
    //     },
    //   },
    // ],
  }
  const [current, setCurrent] = useState(1)

  const handleClick = (e, id) => {
    current === id ? setCurrent(1) : setCurrent(id)
  }
  return (
    <WrapClientsSection>
      <Title>What do our clients say about us?</Title>
      <Cards className="kartica">
        {size.width < 1260 ? (
          <>
            <Slider {...settings}>
              <Card
                title="We changed three or four reservation systems at the hotel."
                text="The Rentlio cloud solution has not only created additional advantages through the fact that we can spend less time per reservation, to the point where we do not spend extra resources to educate new employees."
                avatar={Kosir}
                owner="Jozo Kosir"
                hotel="Hotel Jarun"
              />
              <Card
                title="We as leaders have decided to use the Croatian leader."
                text="From the beginning of our business, we have based everything online and digitally, and we have followed Rentlio since the beginning. For the last ten years, we have used global providers of PMS and channel managers, and we decided on the Croatian leader."
                avatar={Zovko}
                owner="Tomislav Zovko"
                hotel="Irundo"
              />
              <Card
                title="Practicality, intuitiveness, support, visibility."
                text="Live chat works excellently in practice, and quality advice and solutions are provided in real-time. Productivity has increased due to time savings when using Rentlio - the automatic entry of guest data is an outstanding example."
                avatar={Auero}
                owner="Kristian Auer"
                hotel="Vila Nepos Hotel"
              />
            </Slider>
          </>
        ) : (
          <>
            {" "}
            <Card
              title="We changed three or four reservation systems at the hotel."
              text="The Rentlio cloud solution has not only created additional advantages through the fact that we can spend less time per reservation, to the point where we do not spend extra resources to educate new employees."
              avatar={Kosir}
              owner="Jozo Kosir"
              hotel="Hotel Jarun"
              overlay={current === 0 ? true : false}
              // overlay={false}
              // onClick={e => handleClick(e, 0)}
              onMouseEnter={e => handleClick(e, 0)}
            />
            <Card
              title="We as leaders have decided to use the Croatian leader."
              text="From the beginning of our business, we have based everything online and digitally, and we have followed Rentlio since the beginning. For the last ten years, we have used global providers of PMS and channel managers, and we decided on the Croatian leader."
              avatar={Zovko}
              owner="Tomislav Zovko"
              hotel="Irundo"
              // overlay={true}
              overlay={current === 1 ? true : false}
              onMouseEnter={e => handleClick(e, 1)}
            />
            <Card
              title="Practicality, intuitiveness, support, visibility."
              text="Live chat works excellently in practice, and quality advice and solutions are provided in real-time. Productivity has increased due to time savings when using Rentlio - the automatic entry of guest data is an outstanding example."
              avatar={Auero}
              owner="Kristian Auer"
              hotel="Vila Nepos Hotel"
              // overlay={false}
              overlay={current === 2 ? true : false}
              onMouseEnter={e => handleClick(e, 2)}
            />
          </>
        )}
      </Cards>
    </WrapClientsSection>
  )
}

export default Clients
