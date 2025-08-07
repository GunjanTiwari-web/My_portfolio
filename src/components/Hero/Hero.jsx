import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Learning fast, Dreaming big, Building with purpose.</h2>
        <p>
          Full-Stack Developer in the Making | Building Responsive Frontends and Scalable Backends with React, Java, Spring & SQL
        </p>
        <div><a
  href="/resume.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="download-btn">Download Resume</button>
</a>
</div>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/image/img1.png" alt="" />
          </div>
          <img src="./assets/image/hero1.png" alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/image/img2.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/image/img03.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/image/sql.png" alt="" />
          </div>
        </div>
      </div>
    </section>

  );
};

export default Hero