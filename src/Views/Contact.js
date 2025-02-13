import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { handleCustomerService } from "../modules/handleCustomerService";
import { handleProcessForm } from "../modules/handleProcessForm";
import { nameForm } from "../modules/nameForm";
import { numberForm } from "../modules/numberForm";
import { datetimeForm } from "../modules/datetimeForm";
import { formExample } from "../controllers/formExample";

export function Contact() {
  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, []);
  useEffect(componentDidUnmount, []);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className=" Contact-Us no-repeat center width100 height">
          <u>
            <h2>Contact</h2>
          </u>

          <h3>Contact </h3>
          <form onSubmit={handleProcessForm}>
            Name:
            <br />
            <input
              required
              name="name"
              type="name"
              placeholder="Lydia Carter"
              id="name"
            />
            <br />
            Email:
            <br />
            <input
              required
              name="email"
              type="email"
              placeholder="Lcarter200183@yahoo.com"
              id="email"
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
          <br />
          <h3>Contact Customer Service</h3>

          <form onSubmit={handleCustomerService}>
            <input
              required
              name="email"
              type="email"
              placeholder="Email Info"
              id="email"
            />
            <br />
            <br />
            <input
              required
              name="text"
              type="text"
              placeholder="Summery of Issue"
              id="text"
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
          <br />
          <h3>Submit Appointment</h3>
          <form onSubmit={nameForm}>
            <input
              required
              name="firstName"
              type="name"
              placeholder="First Name"
              id="firstname"
            />
            <input
              required
              name="lastName"
              type="name"
              placeholder="Last Name"
              id="lastname"
            />
            <br />
          </form>
          <br />
          <form onSubmit={numberForm}>
            <input
              required
              name="tel"
              type="tel"
              placeholder="###-###-####"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              id="tel"
            />
            <br />
          </form>
          <br />
          <form onSubmit={datetimeForm}>
            <input
              required
              name="datetime-local"
              type="datetime-local"
              placeholder="datetime-local"
              id="datetime-iocal"
            />
            <br />
            <input type="submit" value="Submit" />
          </form>

          <output id="myTag"></output>
        </section>
        <br />
        <hr />
        <button onClick={formExample}>form Example</button>
        <output id="myTag"></output>
      </main>
    </>
  );
}
function componentDidMount() {
  document.title = "The Venue";
  console.log("Mounted title");
}
function componentDidUpdate() {
  setTimeout(console.log("Component Updated"), 2000);
}
function componentDidUnmount() {
  setTimeout(console.log("Component Unmounted"), 2000);
}
