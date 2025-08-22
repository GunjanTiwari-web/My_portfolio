import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Learning fast, Dreaming big, Building with purpose.</h2>
        <p>
          Hey there! I am GUNJAN TIWARI a Full-Stack Developer in the Making | Building Responsive Frontends and Scalable Backends with React, Java, Spring & SQL
        </p>
        <div>
          <a
            href={`${process.env.PUBLIC_URL}/assets/image/Gunjan_tiwari.pdf`}
            download="Gunjan_tiwari.pdf"
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
            <img src={`${process.env.PUBLIC_URL}/assets/image/img1.png`} alt="img1" />
          </div>
          <img src={`${process.env.PUBLIC_URL}/assets/image/hero1.png`} alt="hero" />
        </div>

        <div>
          <div className="tech-icon">
            <img src={`${process.env.PUBLIC_URL}/assets/image/img2.png`} alt="img2" />
          </div>
          <div className="tech-icon">
            <img src={`${process.env.PUBLIC_URL}/assets/image/img03.png`} alt="img3" />
          </div>
          <div className="tech-icon">
            <img src={`${process.env.PUBLIC_URL}/assets/image/sql.png`} alt="sql" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
