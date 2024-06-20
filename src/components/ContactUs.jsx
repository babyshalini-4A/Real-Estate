import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y5633oq', 'template_9lsvluw', form.current, 'Oi8dE1Oh_0YrHMuxV')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent Successfully");
      }, (error) => {
          console.log(error.text);
          alert("Failed to Send Message");
      });
  };

  return (
    <div className="contact-container">
      <div className="form-container">
        <h1>Contact Us</h1>
        <form ref={form} onSubmit={sendEmail} >
          <label For="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Enter first name.." required />

          <label For="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Enter last name.." required />

          <label For="email">Email Address</label>
          <input type="email" id="email" name="from_email" placeholder="Enter Email.." required />

          <label For="message">Your message</label>
          <textarea id="message" name="message" placeholder="Write something.." style={{ height: '120px' }} required></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="image-container">
        <img src="https://balajiaws.s3.ap-south-1.amazonaws.com/Real_Estate/Lodha+the+park+Mumbai.jpg" alt="Home" />
      </div>
    </div>
  );
}

export default ContactUs;