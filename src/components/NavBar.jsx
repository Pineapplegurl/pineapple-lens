import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

// Styled Components
const NavBarContainer = styled.nav`
  background-color: #fff;
  color: #000;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #000;
    text-decoration: none;

    &:hover {
      color: #555;
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0 15px;

      a {
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: bold;
        color: #000;

        &:hover {
          color: #555;
        }
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      background-color: #fff;
      position: absolute;
      top: 60px;
      right: 0;
      width: 100%;
      padding: 20px 0;
      display: ${({ $menuOpen }) => ($menuOpen ? "flex" : "none")};
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 1000;

      li {
        margin: 10px 0;
        text-align: center;
      }
    }
  }

  .menu-icon {
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
      font-size: 1.8rem;
    }
  }
`;

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavBarContainer $menuOpen={menuOpen}>
      {/* Logo */}
      <div className="logo">
        <a
          href="https://www.instagram.com/the_pineapple_lens/?hl=fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Pineapple Lens
        </a>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu Links */}
      <ul>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
      </ul>
    </NavBarContainer>
  );
};

export default NavBar;