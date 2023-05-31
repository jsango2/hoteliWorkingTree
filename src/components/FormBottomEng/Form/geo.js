import React, { useEffect, useState } from "react"
import lookupCountry from "./lookupCountry"

async function handleNavigator(pos) {
  const { latitude, longitude } = pos.coords
  console.log(longitude, latitude)
}

useEffect(() => {
  navigator.geolocation.getCurrentPosition(handleNavigator, () =>
    console.warn("permission was rejected")
  )
}, [])
