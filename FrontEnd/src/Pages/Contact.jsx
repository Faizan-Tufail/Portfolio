import React from "react";
import { MdLocationOn } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

import "../CSS/Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h1>Contact Me</h1>
      <p className="tagline-title">I Want To Hear From You</p>
      <p className="tagline">
        Please fillout the form below to get connected. You can also contact me
        to get my services.
      </p>

      <div className="details">
        <div className="personal-details">
          <div className="address">
            <MdLocationOn className="icon" />
            <div>
              <h2>Address</h2>
              <p>H.No.6, S.No.4, Moh Illahabad,Jhang</p>
            </div>
          </div>

          <div className="address">
            <IoMdMail className="icon" />
            <div>
              <h2>Email</h2>
              <p>faizantufail963@gmail.com</p>
            </div>
          </div>

          <div className="address">
            <MdLocalPhone className="icon" />
            <div>
              <h2>Contact No.</h2>
              <p>+92 317 7080937</p>
            </div>
          </div>
        </div>

        <div className="con-details">
          <form className="contact-form">
            <input type="text" name="" placeholder="Your Name" />
            <input type="email" name="" placeholder="Your Email" />
            <textarea
              className="textarea"
              placeholder="Enter Your Message"
            ></textarea>

            <button>
              Submit Now
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
