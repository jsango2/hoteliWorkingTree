import React from "react"
import { PhotoComp, PhotoOverlay, PhotoOverlay2 } from "./styles.js"
import { useInView } from "react-intersection-observer"

const Photo = ({
  image,
  imageBg,
  position,
  imageTop,
  imageLeft,
  width,
  widthBG,
  topImageWidth,
  image2,
}) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    // trigger inView function only once
    triggerOnce: true,
  })
  return (
    <PhotoComp
      photo={imageBg}
      position={position}
      ref={ref}
      width={widthBG}
      className={`section ${inView ? " is-visible" : ""} `}
    >
      <PhotoOverlay
        imageTop={imageTop}
        imageLeft={imageLeft}
        topImageWidth={topImageWidth}
        width={width}
        className={`sectionOverlay ${inView ? " photoStart" : "photoEnd"} `}
      >
        <img src={image} alt="" width="115%" />
      </PhotoOverlay>
      <PhotoOverlay2
        imageTop={imageTop}
        imageLeft={imageLeft}
        width={width}
        className={`sectionOverlay2 ${inView ? " photoStart2" : "photoEnd2"} `}
      >
        <img src={image2} alt="" width="115%" />
      </PhotoOverlay2>
    </PhotoComp>
  )
}

export default Photo
