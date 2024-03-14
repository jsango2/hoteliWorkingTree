import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seoEng"
import Testimonial from "../components/testimonial/testimonial"
import FourFacts from "../components/fourFactsEng/fourFacts"
import { graphql } from "gatsby"
import TableSection from "../components/TableEng/TableSection"
import Clients from "../components/ClientsEng"
import UserLogos from "../components/UserLogos"
import Integrations from "../components/IntegrationsEng"
import FormBottom from "../components/FormBottomEng"
import BlogCards from "../components/BlogCardsENG"
import Footer from "../components/Footer"
// import CookieConsent from "react-cookie-consent"
import useWindowSize from "../components/helper/useWindowSize"
import Hero from "../components/HeroEng/Hero"

const BlogIndex = ({ data, location }) => {
  const size = useWindowSize()
  const siteTitle = data.site.siteMetadata?.titleEng || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Rentlio Pro | #1 hotel management system" />

      <Hero />
      <UserLogos />
      {/* <Testimonial /> */}
      <FourFacts />
      <TableSection />
      <Clients />
      <Integrations />
      <FormBottom />
      <BlogCards />
      <Footer />
      {/* <CookieConsent
        location="bottom"
        buttonText="I agree"
        cookieName="pro.rentl.io"
        containerClasses="cookieConsent"
        buttonClasses="cookieButton"
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        {size.width > 750 ? (
          <div>
            We use cookies to give you the best online experience. By using our
            website you agree to use our cookies in accordance with our
            <a href="https://rentl.io/en/cookie-policy">Cookies policy</a>
          </div>
        ) : (
          <div>
            <a href="https://rentl.io/en/cookie-policy">Cookies policy</a>
          </div>
        )}
      </CookieConsent> */}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
