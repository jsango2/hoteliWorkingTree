import styled from "styled-components"
import adeo from "../../../static/images/hoteli/Adeo.png"
import amabilis from "../../../static/images/hoteli/Amabilis.png"
import amare from "../../../static/images/hoteli/Amare.png"
import amerun from "../../../static/images/hoteli/Amerun.png"
import bevanda from "../../../static/images/hoteli/Bevanda.png"
import crystal from "../../../static/images/hoteli/Crystal.png"
import fortyfour from "../../../static/images/hoteli/FortyFour.png"
import hostin from "../../../static/images/hoteli/Hostin.png"
import kanjonZrmanja from "../../../static/images/hoteli/KanjonZrmanja.png"
import kulinAblana from "../../../static/images/hoteli/KulinAblana.png"
import martinis from "../../../static/images/hoteli/MartinisMarchi.png"
import miramare from "../../../static/images/hoteli/Miramare.png"
import sanGiorgio from "../../../static/images/hoteli/SanGiorgio.png"
import sanrocco from "../../../static/images/hoteli/SanRocco.png"
import tolero from "../../../static/images/hoteli/Tolero.png"
import vitar from "../../../static/images/hoteli/Vitar.png"

// import prijeko from "../../../static/images/prijeko.png"
// import verdi from "../../../static/images/verdi.png"
// import cittar from "../../../static/images/cittar.png"
// import palace from "../../../static/images/palace.png"
// import republika from "../../../static/images/republika.png"
// import scalini from "../../../static/images/scalini.png"
// import puntjar from "../../../static/images/puntijar.png"
// import jarun from "../../../static/images/jarun.png"
// import vista from "../../../static/images/vista.png"

export const UserLogosWrap = styled.div`
  position: relative;
  width: 100%;
  height: 500px;

  background: white;
  padding-top: 200px;
  /* padding-top: 200px;
  padding-bottom: 200px;
  padding-left: 195px;
  padding-right: 195px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 80px;
  grid-row-gap: 70px;
  justify-items: center; */
  @media screen and (max-width: 900px) {
    /* grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 80px;
    grid-row-gap: 50px; */
  }
  @media screen and (max-width: 1100px) {
    width: 100vw;
    height: 880px;
    overflow: hidden;
    padding-top: 610px;
    /* grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 50px;
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 20px;
    padding-right: 20px; */
  }
  @media screen and (max-width: 400px) {
    /* grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 50px; */
  }
`
export const SanRocco = styled.div`
  /* grid-area: 1 / 1 / 2 / 2; */
  background-image: url(${sanrocco});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  width: 130px;
  height: 100px;
  opacity: 0.6;

  @media screen and (max-width: 500px) {
    width: 40px;
    transform: scale(0.5);
    height: 100px;
  }
`
export const SanGiorgio = styled.div`
  /* grid-area: 1 / 1 / 2 / 2; */
  background-image: url(${sanGiorgio});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  width: 130px;
  height: 100px;
  opacity: 0.6;
  @media screen and (max-width: 500px) {
    width: 40px;
    height: 100px;
    transform: scale(0.5);
  }
`
export const Amabilis = styled.div`
  /* grid-area: 1 / 1 / 2 / 2; */
  background-image: url(${amabilis});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  width: 70px;
  height: 50px;
  opacity: 0.6;
  margin-top: 15px;

  @media screen and (max-width: 500px) {
    margin-top: 0;
    transform: scale(0.5);

    width: 40px;
    height: 100px;
  }
`
export const Adeo = styled.div`
  /* grid-area: 1 / 1 / 2 / 2; */
  background-image: url(${adeo});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  width: 80px;
  height: 70px;
  opacity: 0.6;
  margin-top: 15px;

  @media screen and (max-width: 500px) {
    margin-top: 0;
    transform: scale(0.5);

    width: 40px;
    height: 100px;
  }
`
export const Amare = styled.div`
  /* grid-area: 1 / 1 / 2 / 2; */
  background-image: url(${amare});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  width: 90px;
  height: 80px;
  opacity: 0.6;

  @media screen and (max-width: 500px) {
    width: 40px;
    transform: scale(0.5);
    height: 100px;
  }
`
export const Amerun = styled.div`
  /* grid-area: 1 / 1 / 2 / 2; */
  background-image: url(${amerun});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  width: 50px;
  height: 30px;
  opacity: 0.6;
  margin-top: 15px;

  @media screen and (max-width: 500px) {
    margin-top: 0;
    transform: scale(0.5);

    width: 40px;
    height: 100px;
  }
`
export const Crystal = styled.div`
  /* grid-area: 1 / 1 / 2 / 2; */
  background-image: url(${crystal});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  width: 130px;
  height: 100px;
  opacity: 0.6;
  /* margin-bottom: 30px; */

  @media screen and (max-width: 500px) {
    width: 40px;
    transform: scale(0.5);
    height: 100px;
  }
`
export const FortyFour = styled.div`
  /* grid-area: 1 / 1 / 2 / 2; */
  background-image: url(${fortyfour});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  width: 70px;
  height: 50px;
  opacity: 0.6;
  margin-top: 15px;

  @media screen and (max-width: 500px) {
    margin-top: 0;
    transform: scale(0.5);

    width: 40px;
    height: 100px;
  }
`
export const Hostin = styled.div`
  /* grid-area: 1 / 1 / 2 / 2; */
  background-image: url(${hostin});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  width: 90px;
  height: 80px;
  opacity: 0.6;

  @media screen and (max-width: 500px) {
    width: 40px;
    transform: scale(0.5);
    height: 100px;
  }
`
export const KanjonZrmanja = styled.div`
  /* grid-area: 1 / 1 / 2 / 2; */
  background-image: url(${kanjonZrmanja});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  width: 100px;
  height: 100px;
  opacity: 0.6;

  @media screen and (max-width: 500px) {
    width: 40px;
    transform: scale(0.5);
    height: 100px;
  }
`
export const KulinAblana = styled.div`
  /* grid-area: 1 / 1 / 2 / 2; */
  background-image: url(${kulinAblana});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  width: 130px;
  height: 100px;
  opacity: 0.6;

  @media screen and (max-width: 500px) {
    width: 40px;
    transform: scale(0.5);
    height: 100px;
  }
`

export const Martinis = styled.div`
  /* grid-area: 1 / 2 / 2 / 3; */
  background-image: url(${martinis});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  width: 130px;
  height: 100px;
  opacity: 0.6;

  @media screen and (max-width: 500px) {
    width: 40px;
    transform: scale(0.5);
    height: 100px;
  }
`
export const Miramare = styled.div`
  /* grid-area: 1 / 1 / 2 / 2; */
  background-image: url(${miramare});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  width: 130px;
  height: 100px;
  opacity: 0.6;

  @media screen and (max-width: 500px) {
    width: 40px;
    transform: scale(0.5);
    height: 100px;
  }
`
export const Tolero = styled.div`
  /* grid-area: 1 / 1 / 2 / 2; */
  background-image: url(${tolero});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  width: 90px;
  height: 70px;
  opacity: 0.6;
  margin-top: 15px;

  @media screen and (max-width: 500px) {
    margin-top: 0;
    transform: scale(0.5);

    width: 40px;
    height: 100px;
  }
`
export const Vitar = styled.div`
  /* grid-area: 1 / 1 / 2 / 2; */
  background-image: url(${vitar});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  width: 130px;
  height: 100px;
  opacity: 0.6;

  @media screen and (max-width: 500px) {
    width: 40px;
    transform: scale(0.5);
    height: 100px;
  }
`
export const Bevanda = styled.div`
  /* grid-area: 1 / 3 / 2 / 4; */
  background-image: url(${bevanda});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 90px;
  height: 60px;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  opacity: 0.6;

  filter: grayscale(100%);

  @media screen and (max-width: 500px) {
    margin-top: 40px;
    transform: scale(0.8);
    width: 50px;
    height: 35px;
  }
`
