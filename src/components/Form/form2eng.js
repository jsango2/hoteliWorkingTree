import React from "react"
import {
  FormWrap,
  FormBehind,
  FormTitle,
  FieldsWrap,
  FormOverlay,
} from "./styles.js"
import logo from "../../../static/images/RentlioLogoTamni.svg"
import splitbee from "@splitbee/web"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Form2 extends React.Component {
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
      firstName: "",
    }
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    // dataLayer.push({ event: "PRO form bottom submitted" })
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    }).then(res => {
      this.setState({ showModal: true })
      window.dataLayer.push({
        event: "PRO form top submitted",
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
        })
      }, 10000)
    })

    e.preventDefault()
  }
  onChange = e => {
    const re = /^[0-9\b]+$/
    // this.setState({ brojTelefona: e.target.value })
    // if value is not blank, then test the regex

    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ brojTelefona: e.target.value })
    }
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
    } = this.state
    splitbee.track("Signup Form")

    return (
      <>
        <FormWrap>
          <FormTitle>Get a demo tailored to your needs</FormTitle>

          <FieldsWrap>
            {/* OVAJ FORM JE SAMO ZA NETLIFY BOTOVE DA PREPOZNAJU FORMULAR */}
            <form
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              hidden
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="text" name="ime" />
              <input type="email" name="email" />
              <input type="text" name="imeObjekta" />
              <input type="tel" name="brojTelefona" />
              <input type="text" name="mjesto" />
              <input type="text" name="sustav" />
              <input type="number" name="brojJedinica" />
              {/* <input type="checkbox" name="recieveNewsletter" /> */}
            </form>
            {/* PRAVI FORM */}
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
              <input
                type="text"
                placeholder="Property name"
                name="imeObjekta"
                required
                value={imeObjekta}
                onChange={this.handleChange}
              />
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  placeholder="Country"
                  name="mjesto"
                  required
                  value={mjesto}
                  onChange={this.handleChange}
                  style={{ margin: "0 5px 0 0" }}
                />
                <input
                  type="number"
                  placeholder="Number of rooms"
                  name="brojJedinica"
                  required
                  value={brojJedinica}
                  onChange={this.handleChange}
                  style={{ margin: "0 0 15px 5px" }}
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
              <input
                type="text"
                placeholder="Your phone number"
                name="brojTelefona"
                required
                value={brojTelefona}
                onChange={this.onChange}
              />{" "}
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
              <button type="submit">Book a demo </button>
              {/* <input
              className="submitButton"
              value="KONTAKTIRAJ ME "
              type="submit"
            /> */}
            </form>
          </FieldsWrap>
        </FormWrap>
        {this.state.showModal ? (
          <FormOverlay
            overlayBottom={this.props.overlayBottom}
            overlayRight={this.props.overlayRight}
          >
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
        {this.props.bg ? <FormBehind /> : ""}
      </>
    )
  }
}

export default Form2
