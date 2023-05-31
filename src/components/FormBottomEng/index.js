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
import Form from "./Form/form.js"
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
        <Title>Smartly manage every aspect of your business</Title>
        <TwoFacts
          className={` ${
            inView ? "formBottomAnimation" : "formBottomAnimationNone"
          }`}
        >
          <Fact>
            <img src={Yes} alt="yes" style={{ marginRight: "20px" }} />
            Doubling revenue in the first year of use
          </Fact>
          <Fact>
            <img src={Yes} alt="yes" style={{ marginRight: "20px" }} />
            All-in-one solution for hotel operations
          </Fact>
          <IspuniPodatke>Get a demo tailored to your needs</IspuniPodatke>
        </TwoFacts>
      </TextBox>
      <FormBox>
        <Form />
      </FormBox>
    </WrapFormBottom>
  )
}

export default FormBottom
