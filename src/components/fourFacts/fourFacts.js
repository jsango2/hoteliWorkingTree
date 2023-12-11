import React from "react"

import pbg from "../../../static/images/Kokpit.png"
import BEbg from "../../../static/images/BE1.png"
import BE2 from "../../../static/images/BE2.png"
import BE3 from "../../../static/images/BE3.png"
import p2bg from "../../../static/images/Kalendar.png"
import p3bg from "../../../static/images/Upitiiponuda.png"
import Folio from "../../../static/images/Folio2.png"
import FolioBG from "../../../static/images/FolioBG.png"
import p5bg from "../../../static/images/Izvjestajiistatistika.png"
import HousekeepingBG from "../../../static/images/HousekeepingBG.png"
import Housekeeping from "../../../static/images/Housekeeping2.png"
import Komunikacija from "../../../static/images/Komunikacijasgostima.png"
import Kokpit from "../../../static/images/Kokpit.png"
import Fact from "./fact"
import { FactsWrap } from "./styles.js"

const FourFacts = () => {
  return (
    <FactsWrap>
      <Fact
        key={1}
        titleUp="Jednostavno"
        slide="80% manje administracije"
        title="Rentlio kokpit"
        textUp="Pristup svim najvažnijim detaljima o vašim gostima i
rezervacijama na jednom mjestu.<br/>
<ul>
<li>Uvid u dolaske i odlaske gostiju i naplatu rezervacija</li>

<li>Uvid u housekeeping status soba i kanale prodaje</li>

<li>Brzo i jednostavno pretraživanje rezervacija</li>

<li>Najava obroka s informacijama o planiranom broju i vrsti obroka po danima te dnevnoj listi s brojem sobe i gostiju</li>
</ul>"
        textDown=""
        // image={p1}
        imageBg={pbg}
        position="0% 27%"
        imageTop="0"
        imageLeft="227px"
        width="56%"
        widthBG="550"
      />
      <Fact
        key={2}
        titleUp="Intuitivno"
        slide="Bez preklapanja rezervacija"
        title="Centralni kalendar"
        textUp="Centralni kalendar Rentlio Pro PMS sustava daje vam potpunu
kontrolu nad rezervacijama, a zahvaljujući integriranom
Channel Manageru preklapanje rezervacija je stvar prošlosti."
        textDown="<ul>
<li>Uvid u sve rezervacije i popunjenost smještajnih kapaciteta </li>

<li>Pregled svih detalja rezervacije</li>

<li>Pojedinačno i skupno uređivanje cijena, upravljanje
dostupnošću i restrikcijama u samo nekoliko klikova</li>

<li>Jednostavna izrada višestrukih cjenika</li>

<li>Uvid u housekeeping status soba, dolaske i odlaske gostiju
kao i naplatu rezervacija</li>
        </ul> "
        imageBg={p2bg}
        // image={p2}
        position="50% 0%"
        imageTop="150px"
        imageLeft="216px"
        widthBG="550"
      />
      <Fact
        key={3}
        titleUp="Efikasno"
        slide="Nekoliko jednostavnih koraka"
        title="Upiti i ponude"
        textUp="Povežite email adresu hotela s Rentlio Pro sustavom i
optimizirajte rad call centra i odjela prodaje.<br/>
<ul>
<li>Automatizirano generiranje upita pristiglih putem request formi s
web stranice i email-a hotela</li>

<li>Optimizirani unos telefonskih upita sa svim preferencama gostiju</li>

<li>Odgovaranje na upite gostiju izravno iz sučelja</li>

<li>Prilagođeni pregled statusa svih upita na jednom mjestu</li>

<li>Brzo, efikasno i jednostavno slanje prilagođenih ponuda gostima</li>

<li>Slanje jedne ili više bookabilnih ponuda za smještaj i dodatne usluge uz mogućnost izravne rezervacije od strane gosta</li>

<li>Fleksibilnost u odabiru jezika, načina plaćanja te ažuriranja
raspoloživosti i dostupnosti od primitka ponude do kreiranja
rezervacije</li>
</ul>"
        textDown=""
        imageBg={p3bg}
        position="0% 50%"
        widthBG="550"
      />
      <Fact
        key={4}
        titleUp="Fleksibilno"
        slide="Samo par klikova mišem"
        title="Folio"
        textUp="Jednostavno i fleksibilno upravljanje troškovima uz dijeljenje i
prebacivanje troškova gostiju - u samo par klikova.<br/>
<ul>
<li>Pregled i upravljanje potrošnjom gostiju tijekom boravka</li>

<li>Dodavanje usluga, naknada i vanpansionske potrošnje</li>

<li>Automatsko preuzimanje restoranskih usluga na rezervaciju
smještaja</li>

<li>Pregled svih otvorenih i zatvorenih računa s jasnim uvidom u
iznose</li>

<li>Upravljanje naplatom i izdavanje računa</li>

<li>Pregled svih troškova i konzumacije na jednom mjestu</li></ul>"
        textDown=""
        image={Folio}
        imageBg={FolioBG}
        // position="0% 0%"
        width="280"
        widthBG="350"
        position="50% 0%"
        imageTop="-50px"
        imageLeft="276px"
      />
      <Fact
        key={5}
        titleUp="Detaljno i u stvarnom vremenu"
        slide="Na dohvat ruke "
        title="Izvještaji i statistika"
        textUp="Donosite poslovne odluke temeljene na podacima prikupljenim
u stvarnom vremenu.<br/>

<ul>
Analizirajte ključne pokazatelje uspješnosti bez analiziranja i
pivotiranja Excel tablica - Rentlio Pro pruža vam uvid u sve!<br/>

Prilagodite prodajne i marketinške strategije uz:<br/>

<li>Raznovrsne poslovne izvještaje</li>

<li>Detaljnu statistiku prodajnih rezultata po tržištima i kanalima</li>

<li>Mogućnost usporedbe s prethodnim periodima</li>

<li>Uvid u popunjenost i dinamiku popunjavanja kapaciteta</li></ul> "
        textDown=""
        imageBg={p5bg}
        position="0% 0%"
        width="900"
        widthBG="550"
      />
      <Fact
        key={6}
        titleUp="Efikasno"
        slide="Desktop i mobile"
        title="Housekeeping"
        textUp="Ubrzajte komunikaciju s timom za održavanje i čišćenje i
osigurajte da sobe vašeg hotela uvijek dočekaju goste spremne
za korištenje.<br/><br/>

Dodajte status čistoće i upotrebe sobama izravno iz centralnog
kalendara.<br/><br/>

Housekeeping funkcionalnost dostupna je i na Rentlio mobilnoj
aplikaciji putem koje vaši timovi za održavanje i čišćenje mogu
u hodu mijenjati statuse."
        textDown=""
        imageBg={HousekeepingBG}
        image={Housekeeping}
        placeMiddle={true}
        position="0% 100%"
        imageTop="-50px"
        imageLeft="206px"
        width="150"
        topImageWidth="150"
        overlayMiddle={true}
        widthBG="550"
      />
      <Fact
        key={7}
        titleUp="Profitabilno"
        slide="Pregledno"
        title="Booking Engine"
        textUp="Ostvarite više prihode putem vlastite web stranice na
jednostavan, brz i siguran način.<br/><br/>

Integrirani Booking Engine pomoći će vam da povećate
udio izravnih rezervacija štedeći pritom na provizijama
koje plaćate OTA kanalima.<br/><br/>

Povećajte stope konverzije pružajući posjetiteljima web
stranice da jednostavno uspoređuju cijene, pretražuju
termine i odabiru ponude u skladu sa svojim potrebama."
        textDown=""
        imageBg={BEbg}
        image={BE2}
        image2={BE3}
        topImageWidth="50"
        width="230"
        // image={p2}
        position="0% 0%"
        imageTop="0px"
        imageLeft="196px"
        widthBG="550"
      />
      <Fact
        key={8}
        titleUp="Pravovremeno i personalizirano"
        slide="Jednostavno"
        title="Komunikacija s gostima"
        textUp="Efikasna i pravovremena komunikacija pomaže u izgradnji
kvalitetnijih i osobnijih odnosa s gostima i izravno utječe na
njihovo iskustvo.<br/><br/>

Komunicirajte s gostima uz pomoć predefiniranih email
predložaka - od trenutka kreiranja rezervacije, do trenutka
odjave gosta pa čak i nakon što gosti napuste hotel.<br/><br/>

Informirajte goste o dodatnim uslugama koje nudite ili im
pružite informacije o zanimljivostima i lokalnim atrakcijama
nedaleko hotela."
        textDown=""
        imageBg={Komunikacija}
        // image={p2}
        position="0% 0%"
        imageTop="150px"
        imageLeft="216px"
        widthBG="550"
      />
    </FactsWrap>
  )
}

export default FourFacts
