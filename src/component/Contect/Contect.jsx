import React from 'react';
import "../Contect/Contect.css"
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contect() {
  return (
    <>
       <section id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get in Touch</h2>
          <p>Feel free to reach out to me anytime!</p>
        </div>
        
        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form">
            <h3>Message Me</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p>Always available for freelance work if the right project comes along.</p>
            <div className="info-item">
              <strong>Name:</strong> John Doe
            </div>
            <div className="info-item">
              <strong>Email:</strong> john.doe@example.com
            </div>
            <div className="info-item">
              <strong>Phone:</strong> +1 (123) 456-7890
            </div>
            <div className="info-item">
              <strong>Location:</strong> San Francisco, CA
            </div>
            <a href="/assete/image/resume.pdf" className="download-btn" download>Download CV</a>
          </div>
        </div>
      </div>
    </section>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Let's Connect</h3>
          <p>Follow me on my social media platforms.</p>
          <div className="footer-icons">
            <a href="https://github.com/kumavatsimran" target="_parent" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="https://linkedin.com/in/simran-kumavat-7a35b7343" target="_parent" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
          </div>
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
      </div>
    </footer>
    </>
  );
}

export default Contect;
