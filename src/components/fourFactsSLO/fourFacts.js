import React from "react"

import p1 from "../../../static/images/facts1.png"
import pbg from "../../../static/images/facts1bg.png"
import p2 from "../../../static/images/facts2.png"
import p2bg from "../../../static/images/facts2bg.png"
import p3bg from "../../../static/images/facts3bg.png"
import p4bg from "../../../static/images/facts4bg.png"
import Fact from "./fact"
import { FourFactsWrap } from "./styles.js"

const FourFacts = () => {
  return (
    <FourFactsWrap>
      <Fact
        key={1}
        titleUp="Učinkovito"
        slide="80% manj administrativnega dela"
        title="En sistem za vse hotelske aktivnosti"
        textUp="S sistemom za upravljanje nepremičnin in upravljavcem kanalov Rentlio so vsi kanali OTA popolnoma sinhronizirani. Osrednji koledar omogoča recepciji učinkovitejše in preprostejše upravljanje rezervacij, posodabljanje cen ter upravljanje razpoložljivosti in omejitev z le nekaj kliki."
        textDown=""
        image={p1}
        imageBg={pbg}
        position="50% 27%"
        imageTop="0"
        imageLeft="227px"
        width="56%"
      />
      <Fact
        key={2}
        titleUp="Zanesljivo"
        slide="Odgovor v 3 minutah"
        title="Regijska podpora vam je na voljo"
        textUp="Na povpraševanje odgovorimo v samo 3 minutah. 99% pogovorov v podporo strankam Rentlio so uporabniki ocenili kot izjemne ali odlične. Z vrhunsko podporo strankam vam bo naša ekipa za uvajanje pomagala prijaviti vaš hotel v Rentlio Pro in izobraziti vaše ekipe."
        textDown=""
        imageBg={p2bg}
        image={p2}
        position="50% 0%"
        imageTop="150px"
        imageLeft="216px"
      />
      <Fact
        key={3}
        titleUp="Donosno"
        slide="25% višji prihodki"
        title="Ustvarite večje prihodke"
        textUp="Kanali OTA zaračunavajo povprečno 15-30% provizije. Rezervacijski sistem Rentlio vam omogoča več neposrednih rezervacij in dodaten zaslužek s samo 2% provizije. S centralizacijo povpraševanj in z več neposrednimi rezervacijami se lahko vaš prihodek poveča za do 25%."
        textDown=""
        imageBg={p3bg}
        position="70% 50%"
      />
      <Fact
        key={4}
        titleUp="Prilagodljivo"
        slide="Poročilo v <30 sekundah"
        title="Poročila na dosegu roke"
        textUp="Rentlio omogoča neposreden in transparenten vpogled v uspešnost poslovanja in možnost hitre izdelave tedenskih, mesečnih in letnih poročil."
        textDown="Preprost dostop do podatkov o prihodkih, zasedenosti kapacitet, številu prodanih nočitev, deležu rezervacij po državah in prodajnih kanalih vam bo pomagal pri strateških poslovnih odločitvah."
        imageBg={p4bg}
        position="0% 0%"
        width="900"
      />
    </FourFactsWrap>
  )
}

export default FourFacts
