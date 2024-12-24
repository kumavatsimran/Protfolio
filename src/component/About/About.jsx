import React from 'react';
import "../About/About.css"

function About() {
  return (
    <>
    
    {/* <section id="about" className="about-me">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm <strong>[Your Name]</strong>, a passionate and dedicated web developer specializing in creating dynamic, responsive, and user-friendly web applications.
              With a strong foundation in <strong>React.js</strong>, I excel at building scalable front-end interfaces that deliver seamless user experiences.
            </p>
            <p>
              My expertise includes state management libraries like <strong>Redux</strong>, API integration using <strong>Axios</strong>, and data management with <strong>Firebase</strong> or <strong>JSON Server</strong>.
              I prioritize clean code, reusable components, and optimized performance in every project I work on.
            </p>
            <p>
              I am always eager to learn new technologies and improve my skills to stay ahead in the ever-evolving tech industry.
            </p>
          </div>
          <div className="about-skills">
            <h3>Skills & Technologies:</h3>
            <ul>
              <li>React.js</li>
              <li>Redux</li>
              <li>Firebase</li>
              <li>JSON Server</li>
              <li>Axios</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section> */}
     <section id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm a passionate <strong>Full-Stack Developer</strong> dedicated to crafting seamless web experiences. With expertise in <strong>React, Node.js, MongoDB, and Express.js</strong>, I build scalable solutions that deliver real value.
          </p>
          <p>
            Collaboration and innovation are at the heart of my work. Let’s create something extraordinary together!
          </p>
          <button className="contact-btn">
            <a href="/assete/image/resume.pdf" className="download-btn" download>Download CV</a>
          </button>
        </div>
        <div className="about-info">
          <ul>
            <li><strong>Name:</strong> Simran Kumavat</li>
            <li><strong>Location:</strong> Surat</li>
            <li><strong>Email:</strong> 4012simrankumavat@gmail.com</li>
            <li><strong>Phone:</strong> +1313151015</li>
             <li><strong>Education:</strong> (B.C.A)ongoing</li>
          </ul>
        </div>
      </div>
    </section>


      
    </>
  );
}

export default About;
