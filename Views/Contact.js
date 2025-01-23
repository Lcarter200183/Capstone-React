import React from "react";
import { Link } from "react-router"; 
import "./Contact.scss";

export function Contact() {
    const center = {justifySelf: center};
    return(
        <>
       
         <header id="contactHeader">
         <img width="100%" src="https://cdn.glitch.global/c909b8a4-2fe0-40eb-86e6-4470528773cd/c8fa72be-08fd-459d-b37e-5fe46a37cd5c.image.png?v=1722105706312" alt="outside of building" />
         <div className="bg-warning fs-6 p-2 m-2">
             <nav className="nav nav-tab nav-underline nav-fill">
                 <Link to="/home">HOME |</Link>
                 <Link to="/gallery">GALLERY |</Link>
                 <Link to="/contact">CONTACT </Link>
             </nav>
         </div>
     </header>
     <main id="contactMain" className="container">
         <section className=" Contact-Us no-repeat center width100 height">
             <u><h2>Contact</h2></u>
 
 
             <h3>Contact </h3>
             <form onSubmit="myProcessForm(event)">
                 <label type="name" for="name">Name:</label><br />
                 <input required name="name" type="name" placeholder="Lydia Carter" id="name" />
                 <br />
 
                 <label type="email" for="email">Email:</label><br />
                 <input required name="email" type="email" placeholder="Lcarter200183@yahoo.com" id="email" />
                 <br />
                 <input type="submit" value="Submit" />
             </form>
 
             <br />
             <h3>Contact Customer Service</h3>
 
             <form onSubmit="handleCustomerService(event)">
                 <input required name="email" type="email" placeholder="Email Info" id="email" />
                 <br />
                 <br />
                 <input required name="text" type="text" placeholder="Summery of Issue" id="text" />
                 <br />
                 <input type="submit" value="Submit" />
             </form>
             <br />
 
 
             <h3>Submit Appointment</h3>
 
             <form onSubmit="nameForm(event)">
                 <input required name="firstName" type="name" placeholder="First Name" id="firstname" />
                 <input required name="lastName" type="name" placeholder="Last Name" id="lastname" />
                 <br />
             </form>
             <br />
             <form onSubmit="phoneForm(event)">
                 <input required name="tel" type="tel" placeholder="###-###-####" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="tel" />
                 <br />
             </form>
             <br />
             <form onSubmit="datetimeForm(event)">
                 <input required name="datetime-local" type="datetime-local" placeholder="datetime-local" id="datetime-iocal" /><br />
                 <input type="submit" value="Submit" />
             </form>
 
 
 
 
             <output id="outputTag"></output>
         </section>
         <br />
         <hr />
         <button onClick="formExample()">form Example</button>
         <output id="outputTag"></output>
 
 
     </main>
 
 
     <footer id="contactFooter" style={{textAlign: center}} ><pre>Website created by <code>Lydia Carter</code></pre></footer>
     </>
    );
}