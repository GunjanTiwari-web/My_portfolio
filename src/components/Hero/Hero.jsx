import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import './Hero.css'

const Hero = () => {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Hey There! I am Gunjan Tiwari",
        " A Java Enthusiast",
       " A Responsive UI Builder",
          "A Tech Explorer",
        " And Full-Stack Developer in the Making."
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section className="hero-container">
      <div className="hero-content">
        {/* Replace h2 with span for typed.js */}
        <h2><span ref={typedRef}></span></h2>
        <p>
          Hey there! I am a Full-Stack Developer in the Making | Building Responsive Frontends and Scalable Backends with React, Java, Spring & SQL
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
