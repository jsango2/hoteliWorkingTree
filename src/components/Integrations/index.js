import React from "react"
import {
  WrapIntegrationsSection,
  Title,
  Text,
  Logos,
  Image,
  SaznajKako,
  Linija,
} from "./styles.js"
import p1 from "../../../static/images/remaris.png"
import p2 from "../../../static/images/hoteza.png"
import p3 from "../../../static/images/minimax.png"
import p4 from "../../../static/images/monri.png"
import p5 from "../../../static/images/proRMS_Logo.svg"
import p6 from "../../../static/images/Chekin.webp"
import p7 from "../../../static/images/Duve.svg"
import p8 from "../../../static/images/Flexkeeping.svg"
import p9 from "../../../static/images/Guesttalk.png"
import p10 from "../../../static/images/mailchimp.png"
import p11 from "../../../static/images/pricelabs.png"
import p12 from "../../../static/images/stripe.png"
import p13 from "../../../static/images/sweeply.png"
import p14 from "../../../static/images/Saop_logo.png"
import Lottie from "lottie-react"
import gradientAnimation from "../../components/testimonial/animation"
import { GradientBottomLine } from "../../components/testimonial/styles.js"

const Integrations = () => {
  return (
    <WrapIntegrationsSection className="box">
      <Title>Povežite Rentlio s alatima koje koristite</Title>
      <Text>
        Otvorena API dokumentacija omogućit će vam da jednostavno povežete
        Rentlio s drugim alatima koje koristite i kreirate savršeni ekosistem u
        skladu s vašim potrebama.
      </Text>
      <SaznajKako>
        <a href="https://rentl.io/integracije">Saznaj kako</a>
        <Linija />
      </SaznajKako>

      <Logos>
        <Image>
          <img src={p1} alt="p1" height="100%" />
        </Image>
        <Image>
          <img src={p5} alt="p5" height="100%" />
        </Image>
        <Image>
          <img src={p6} alt="p6" height="100%" />
        </Image>
        <Image>
          <img src={p7} alt="p7" height="100%" />
        </Image>
        <Image>
          <img src={p8} alt="p8" height="100%" />
        </Image>{" "}
        <Image>
          <img src={p9} alt="p9" height="100%" />
        </Image>{" "}
        <Image>
          <img src={p10} alt="p10" height="100%" />
        </Image>{" "}
        <Image>
          <img src={p11} alt="p11" height="100%" />
        </Image>{" "}
        <Image>
          <img src={p12} alt="p12" height="100%" />
        </Image>{" "}
        <Image>
          <img src={p13} alt="p13" height="100%" />
        </Image>
        <Image>
          <img src={p2} alt="p2" height="100%" />
        </Image>
        <Image>
          <img src={p3} alt="p3" height="100%" />
        </Image>
        <Image>
          <img src={p4} alt="p4" height="100%" />
        </Image>
        <Image small>
          <img src={p14} alt="p14" height="40px" />
        </Image>
      </Logos>
      <GradientBottomLine>
        <Lottie animationData={gradientAnimation} autoPlay={true} loop={true} />
      </GradientBottomLine>
    </WrapIntegrationsSection>
  )
}

export default Integrations
