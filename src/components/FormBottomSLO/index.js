import React, { useEffect } from "react"
import {
  WrapFormBottom,
  TextBox,
  FormBox,
  TwoFacts,
  Fact,
  Title,
  IspuniPodatke,
} from "./styles.js"
import Yes from "../../../static/images/yes.svg"
import Form from "./Form/formSLO.js"
import { useInView } from "react-intersection-observer"

const FormBottom = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
    // trigger inView function only once
    triggerOnce: true,
  })

  // async function handleNavigator(pos) {
  //   const { latitude, longitude } = pos.coords
  //   console.log("Pozicija", longitude, latitude)
  // }

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(handleNavigator, () =>
  //     console.warn("permission was rejected")
  //   )
  // }, [])
  return (
    <WrapFormBottom>
      <TextBox ref={ref}>
        <Title>Pametno upravljajte vse vidike svojega poslovanja</Title>
        <TwoFacts
          className={` ${
            inView ? "formBottomAnimation" : "formBottomAnimationNone"
          }`}
        >
          <Fact>
            <img src={Yes} alt="yes" style={{ marginRight: "20px" }} />
            Podvojitev prihodkov v prvem letu uporabe
          </Fact>
          <Fact>
            <img src={Yes} alt="yes" style={{ marginRight: "20px" }} />
            Celostna rešitev za upravljanje hotela
          </Fact>
          <IspuniPodatke>
            Izpolnite podatke in se dogovorite za demo predstavitev
          </IspuniPodatke>
        </TwoFacts>
      </TextBox>
      <FormBox>
        <Form />
      </FormBox>
    </WrapFormBottom>
  )
}

export default FormBottom
