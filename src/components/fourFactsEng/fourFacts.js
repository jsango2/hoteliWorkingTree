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
        titleUp="Efficient"
        slide="80% less administrative work"
        title="One software for all  hotel operations"
        textUp="With Rentlio PMS and Channel Manager, all OTA channels are fully synchronized. The central calendar enables the reception to manage reservations more efficiently and quickly, update prices and manage availability and restrictions in just a few clicks."
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
        titleUp="Reliable"
        slide="3-minute response time"
        title="We respond to your inquiry in just 3 minutes"
        textUp="Users rate 99% of Rentlio customer support conversations as outstanding or excellent. Besides the superb customer support, our onboarding team will help you set up your hotel on Rentlio Pro and educate your teams."
        textDown=""
        imageBg={p2bg}
        image={p2}
        position="50% 0%"
        imageTop="150px"
        imageLeft="216px"
      />
      <Fact
        key={3}
        titleUp="Profitable"
        slide="25% higher income"
        title="OTA channels charge an average of 15-30% commission"
        textUp="Rentlio Booking Engine allows you to make more direct bookings and additional income with only a 2% commission. By centralizing inquiries and with more direct bookings, your income can increase by up to 25%."
        textDown=""
        imageBg={p3bg}
        position="70% 50%"
      />
      <Fact
        key={4}
        titleUp="Flexible"
        slide="Reports in <30 seconds"
        title="Reports at hand"
        textUp="Rentlio provides direct and transparent insight into business performance and the ability to generate weekly, monthly, and annual reports quickly."
        textDown="Easy access to data such as revenue, capacity occupancy, number of nights sold, the share of reservations by country, and sales channels will help you make strategic business decisions.
"
        imageBg={p4bg}
        position="0% 0%"
        width="900"
      />
    </FourFactsWrap>
  )
}

export default FourFacts
