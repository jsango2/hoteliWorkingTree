import React from "react"
import { WrapBlogCardsSection } from "./styles"
import p1 from "../../../static/images/blogcard1.jpeg"
import p2 from "../../../static/images/blogcard2.jpeg"
import p3 from "../../../static/images/blogcard3.jpeg"
import BlogCard from "./blogCard"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import useWindowSize from "../helper/useWindowSize"

const BlogCards = () => {
  const size = useWindowSize()
  const settings = {
    // arrows: true,
    dots: true,
    infinite: true,
    lazyLoad: true,
    fade: true,
    speed: 800,
    autoplaySpeed: 6000,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // responsive: [
    //   {
    //     breakpoint: 450,
    //     settings: {
    //       dots: true,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       lazyLoad: true,
    //       arrows: false,
    //       speed: 500,
    //     },
    //   },
    // ],
  }
  return (
    <WrapBlogCardsSection>
      {size.width < 1260 ? (
        <>
          {" "}
          <Slider {...settings}>
            <BlogCard
              photo={p1}
              photoUrl="http://cms.rentl.io/wp-content/uploads/2021/02/annie-spratt-qyAka7W5uMY-unsplash.jpg"
              title="Product in Review: What’s New?"
              link="https://rentl.io/en/blog/product-in-review-whats-new"
            />
            <BlogCard
              photo={p2}
              photoUrl="http://cms.rentl.io/wp-content/uploads/2021/02/fran-hogan-VPci0fN-7t4-unsplash.jpg"
              title="Rentlio Awarded Airbnb Preferred Software Partner 2022 Status"
              link="https://rentl.io/en/blog/rentlio-awarded-airbnb-preferred-software-partner-2022-status"
            />

            <BlogCard
              photo={p3}
              photoUrl="http://cms.rentl.io/wp-content/uploads/2021/07/christopher-gower-m_HRfLhgABo-unsplash-2.jpg"
              title="When is the Right Time to Change Your PMS and Channel Manager?"
              link="https://rentl.io/en/blog/when-is-the-right-time-to-change-your-pms-and-channel-manager"
            />
          </Slider>
        </>
      ) : (
        <>
          {" "}
          <BlogCard
            photo={p1}
            title="Product in Review: What’s New?"
            link="https://rentl.io/en/blog/product-in-review-whats-new"
          />
          <BlogCard
            photo={p2}
            title="Rentlio Awarded Airbnb Preferred Software Partner 2022 Status"
            link="https://rentl.io/en/blog/rentlio-awarded-airbnb-preferred-software-partner-2022-status"
          />
          <BlogCard
            photo={p3}
            title="When is the Right Time to Change Your PMS and Channel Manager?"
            link="https://rentl.io/en/blog/when-is-the-right-time-to-change-your-pms-and-channel-manager"
          />
        </>
      )}
    </WrapBlogCardsSection>
  )
}

export default BlogCards
