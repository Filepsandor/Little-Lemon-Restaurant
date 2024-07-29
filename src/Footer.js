import React from "react";

function Footer() {
  return (
    <footer>
      <div className="about">
        <h2>About Us</h2>
        <ul>
          <li>
            <a href="#our-company">Our Company</a>
          </li>
          <li>
            <a href="#suppliers">Suppliers</a>
          </li>
          <li>
            <a href="#careers">Careers</a>
          </li>
          <li>
            <a href="#newsletter">Newsletter</a>
          </li>
          <li>
            <a href="#customer-service">Customer Service</a>
          </li>
          <li>
            <a href="#contact-us">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="contact-info">
        <h2>Contacts</h2>
        <ul>
          <li>
            <a href="tel:+11234567890">+1(123)456-7890</a>
          </li>
          <li>
            <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
          </li>
          <li>123 Ford Blvd, Chicago, IL, 60618</li>
        </ul>
      </div>
      <div className="availability">
        <h2>Availability</h2>
        <ul>
          <li>Tues-Thurs: 12pm-10pm</li>
          <li>Fri-Sun: 12pm-10pm</li>
          <li>Mon: Closed</li>
        </ul>
      </div>
      <div className="socials">
        <h2>Socials</h2>
        <ul>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pinterest
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
