import "./Navbar.css";
import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav/MobileNav";
import { FaHackerrank, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [theme, setTheme] = useState("light");
useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
  document.body.className = savedTheme;
}, []);

const toggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  document.body.className = newTheme;
  localStorage.setItem("theme", newTheme);
};

  
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <h1 className="logo-text">@Gunjan Tiwari</h1>

          <ul className="nav-icons">
            <li>
              <a
                href="https://www.hackerrank.com/gunjantiwari_gc1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaHackerrank />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/GunjanTiwari-web"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gunjan-tiwari-3a611625b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/Gunjan_Tiwari-211"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode />
              </a>
            </li>

            {/* Theme Toggle */}
           <li>
  <button className="theme-toggle" onClick={toggleTheme}>
    <span style={{ fontSize: "28px" }}>
      {theme === "light" ? "🌙" : "☀️"}
    </span>
    <span style={{ fontSize: "12px", marginTop: "4px" ,color:"white" }}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </span>
  </button>
</li>

            {/* Contact Button */}
            <li>
              
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
