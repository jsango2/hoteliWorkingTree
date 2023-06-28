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
      <Title>Kaj naše stranke pravijo o nas?</Title>
      <Cards className="kartica">
        {size.width < 1260 ? (
          <>
            <Slider {...settings}>
              <Card
                title="V hotelu smo spremenili tri ali štiri rezervacijske sisteme."
                text="Rešitev v oblaku Rentlio ni ustvarila le dodatnih prednosti vse od tega, da ne porabimo toliko časa za rezervacijo, pa do tega, da ne porabimo preveč sredstev za izobraževanje novih zaposlenih."
                avatar={Kosir}
                owner="Jozo Kosir"
                hotel="Hotel Jarun"
              />
              <Card
                title="Kot vodilni smo se odločili za vodilnega na Hrvaškem"
                text="Že od začetka našega poslovanja vse temelji na spletu in digitalnemu, Rentlio pa spremljamo že od vrsto let. Zadnjih deset let uporabljamo globalne ponudnike sistemov za upravljanje kanalov in upravljavcev kanalov, odločili pa smo se za vodilnega na Hrvaškem."
                avatar={Zovko}
                owner="Tomislav Zovko"
                hotel="Irundo"
              />
              <Card
                title="Praktičnost, intuitivnost, podpora, preglednost."
                text="Klepet v živo se v praksi odlično obnese, kakovostni nasveti in rešitve pa so na voljo v realnem času. Produktivnost se je povečala zaradi prihranka časa pri uporabi Rentlija – dober primer je samodejni vnos podatkov o gostih."
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
              title="V hotelu smo spremenili tri ali štiri rezervacijske sisteme."
              text="Rešitev v oblaku Rentlio ni ustvarila le dodatnih prednosti vse od tega, da ne porabimo toliko časa za rezervacijo, pa do tega, da ne porabimo preveč sredstev za izobraževanje novih zaposlenih."
              avatar={Kosir}
              owner="Jozo Kosir"
              hotel="Hotel Jarun"
              overlay={current === 0 ? true : false}
              // overlay={false}
              // onClick={e => handleClick(e, 0)}
              onMouseEnter={e => handleClick(e, 0)}
            />
            <Card
              title="Kot vodilni smo se odločili za vodilnega na Hrvaškem"
              text="Že od začetka našega poslovanja vse temelji na spletu in digitalnemu, Rentlio pa spremljamo že od vrsto let. Zadnjih deset let uporabljamo globalne ponudnike sistemov za upravljanje kanalov in upravljavcev kanalov, odločili pa smo se za vodilnega na Hrvaškem."
              avatar={Zovko}
              owner="Tomislav Zovko"
              hotel="Irundo"
              // overlay={true}
              overlay={current === 1 ? true : false}
              onMouseEnter={e => handleClick(e, 1)}
            />
            <Card
              title="Praktičnost, intuitivnost, podpora, preglednost."
              text="Klepet v živo se v praksi odlično obnese, kakovostni nasveti in rešitve pa so na voljo v realnem času. Produktivnost se je povečala zaradi prihranka časa pri uporabi Rentlija – dober primer je samodejni vnos podatkov o gostih."
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
