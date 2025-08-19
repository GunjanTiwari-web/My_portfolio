import React, { useEffect, useRef } from "react";
import "./Hero.css";
import Typed from "typed.js";

const Hero = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Hi, I am Gunjan Tiwari",
        "A Java Developer",
        "A MERN Stack Developer",
        "A Full-Stack Enthusiast"
      ],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <section className="hero-container">
      <div className="hero-content">
        {/* Replaced static h2 with Typed.js */}
        <h2>
          <span ref={el}></span>
        </h2>

        <p>
          Hey there! I am GUNJAN TIWARI a Full-Stack Developer in the Making | Building Responsive Frontends and Scalable Backends with React, Java, Spring & SQL
        </p>

        <div>
          <a
            href="/assets/image/Gunjan_tiwari.pdf"
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

export default Hero;
