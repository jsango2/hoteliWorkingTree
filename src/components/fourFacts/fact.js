import React from "react"
import {
  Box,
  BoxGreenTitle,
  Title1,
  Paragraph,
  TextBox,
  BlueNumber,
  WrapTitle,
} from "./styles.js"
import { useInView } from "react-intersection-observer"
import Photo from "./photo.js"

const Fact = ({
  titleUp,
  title,
  textUp,
  textDown,
  slide,
  image,
  image2,
  imageBg,
  id,
  position,
  imageTop,
  imageLeft,
  width,
  widthBG,
  placeMiddle,
  topImageWidth,
  overlayMiddle,
}) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    // trigger inView function only once
    triggerOnce: true,
  })
  return (
    <Box key={id} ref={ref}>
      <TextBox>
        <WrapTitle>
          <BoxGreenTitle>{titleUp}</BoxGreenTitle>
          {/* <BlueNumber
            className={` ${
              inView ? "scale-up-hor-left" : "scale-up-hor-left-start"
            }`}
          >
            <span className={` ${inView ? "fade-in" : ""}`}>{slide}</span>
          </BlueNumber> */}
        </WrapTitle>
        <Title1>{title}</Title1>
        <Paragraph dangerouslySetInnerHTML={{ __html: textUp }}></Paragraph>
        <Paragraph dangerouslySetInnerHTML={{ __html: textDown }}></Paragraph>
      </TextBox>
      <Photo
        image={image}
        imageBg={imageBg}
        image2={image2}
        position={position}
        imageTop={imageTop}
        imageLeft={imageLeft}
        width={width}
        widthBG={widthBG}
        topImageWidth={topImageWidth}
        overlayMiddle={overlayMiddle}
      />
    </Box>
  )
}

export default Fact
