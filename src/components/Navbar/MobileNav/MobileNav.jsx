import React from "react";
import { FaHackerrank, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
      <div className="mobile-menu-container">
        <button onClick={toggleMenu} style={{ marginBottom: "2rem" }}>
          Close ✖
        </button>
        <ul>
          <li>
            <a
              href="https://www.hackerrank.com/gunjantiwari_gc1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaHackerrank size={28} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/GunjanTiwari-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={28} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/gunjan-tiwari-3a611625b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={28} />
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/Gunjan_Tiwari-211"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode size={28} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
