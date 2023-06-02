import React from "react"
// import {
//   FormWrap,
//   FormBehind,
//   FormTitle,
//   FieldsWrap,
//   WrapPipe,
//   FormOverlay,
// } from "./styles.js"
import {
  FormWrap,
  FormOverlay,
  FieldsWrap,
  FormWrapEng,
  FormOverlayEng,
  FieldsWrapEng,
} from "./styles.js"
import logo from "../../../static/images/RentlioLogoTamni.svg"

import splitbee from "@splitbee/web"

import Country from "./country.js"
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ime: "",
      email: "",
      brojTelefona: "",
      imeObjekta: "",
      brojJedinica: "",
      mjesto: "",
      sustav: "",
      showModal: false,
      thanks: false,
      countryCode: "",
    }
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    // window.dataLayer.push({
    //   event: "PRO form top submitted",
    //   // custom event params
    // })
    // dataLayer.push({ event: "PRO form bottom submitted" })
    e.preventDefault()
    console.log(this.state)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    }).then(res => {
      this.setState({ showModal: true })
      window.dataLayer.push({
        event: "PRO form bottom submitted",
        // custom event params
      })
      setTimeout(() => {
        this.setState({ thanks: true })
      }, 500)
      setTimeout(() => {
        this.setState({
          ime: "",
          email: "",
          brojTelefona: "",
          imeObjekta: "",
          showModal: false,
          thanks: false,
          brojJedinica: "",
          mjesto: "",
          sustav: "",
          countryCode: "",
        })
      }, 10000)
    })

    e.preventDefault()
  }
  onChange = e => {
    // const re = /^[0-9\b]+$/
    const re = /^[\d +/-]+$/
    console.log(re.test(e.target.value))

    // this.setState({ brojTelefona: e.target.value })
    // if value is not blank, then test the regex

    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ brojTelefona: e.target.value })
    }
  }

  getData = (code, label) => {
    this.setState({
      countryCode: code,
      brojTelefona: "+" + code + " ",
      mjesto: label,
    })
    // this.setState({ brojTelefona: "+" + code + " " })
    // this.setState({ mjesto: label })
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  render() {
    const {
      ime,
      email,
      brojTelefona,
      imeObjekta,
      brojJedinica,
      mjesto,
      sustav,
      countryCode,
    } = this.state
    splitbee.track("Signup Form")

    return (
      <>
        <FormWrapEng>
          <FieldsWrapEng>
            <form
              onSubmit={this.handleSubmit}
              data-splitbee-event="Signup Form"
            >
              <input
                type="text"
                placeholder="Your full name"
                name="ime"
                required
                value={ime}
                onChange={this.handleChange}
              />
              <input
                type="email"
                placeholder="Your email"
                name="email"
                required
                value={email}
                onChange={this.handleChange}
              />
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  placeholder="Property name"
                  name="imeObjekta"
                  required
                  value={imeObjekta}
                  onChange={this.handleChange}
                  className="propertyName"
                />
                <input
                  type="number"
                  placeholder="Number of rooms"
                  name="brojJedinica"
                  required
                  value={brojJedinica}
                  onChange={this.handleChange}
                  style={{ margin: "0 0 15px 5px" }}
                  className="numberOfRooms"
                />
              </div>
              <input
                type="text"
                placeholder="Which hotel management software do you use?"
                name="sustav"
                required
                value={sustav}
                onChange={this.handleChange}
              />
              <div style={{ display: "flex" }}>
                <Country getData={this.getData} required />
                {/* <input
                  type="text"
                  placeholder="Country"
                  name="mjesto"
                  required
                  value={mjesto}
                  onChange={this.handleChange}
                  style={{ margin: "0 5px 0 0" }}
                /> */}
                <input
                  type="text"
                  placeholder="Your phone number"
                  name="brojTelefona"
                  required
                  prefix={"+"}
                  value={brojTelefona}
                  onChange={this.onChange}
                  className="phoneNumber"
                />{" "}
              </div>

              {/* <label className="container">
                Želim primati Rentlio newsletter za hotele
                <input
                  type="checkbox"
                  defaultChecked="checked"
                  name="recieveNewsletter"
                  value={recieveNewsletter}
                  onChange={this.handleChange}
                />
                <span className="checkmark"></span>
              </label> */}
              <button type="submit">BOOK A DEMO</button>
              {/* <input
              className="submitButton"
              value="KONTAKTIRAJ ME "
              type="submit"
            /> */}
            </form>
          </FieldsWrapEng>
        </FormWrapEng>
        {this.state.showModal ? (
          <FormOverlay>
            <div>
              {this.state.ime.split(" ")[0]}, the countdown to Rentlio Pro is on
              started and, above all, we want to make sure that we have
              predicted your every, even the smallest, need.
              <br />
              Our hotel tech expert will contact you within 24 hours hour to
              bring you the benefits of the expected Rentlio Pro hotel system.
            </div>
            <div
              style={{ marginTop: "50px" }}
              className={`modalForm  ${
                this.state.thanks ? "showModal" : "hideModal"
              }`}
            >
              <img src={logo} alt="logos" width="300px" />
            </div>
          </FormOverlay>
        ) : (
          <div></div>
        )}
      </>
    )
  }
}

export default Form
