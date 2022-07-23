import React, { useState } from "react";
import { FC } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";
import { images } from "../../constants";

const Navbar: FC<{}> = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="/">Home page</a>
        </li>
        <li className="p__opensans">
          <a href="/About">About</a>
        </li>
        <li className="p__opensans">
          <a href="/Menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="/Awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="/Contact">Contact</a>
        </li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log in / Register
        </a>
        <div></div>
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>

      <div className="app__navbar-smallScreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallScreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />

            <ul className="app__navbar-smallScreen_links">
              <li className="p__opensans">
                <a href="/">Home page</a>
              </li>
              <li className="p__opensans">
                <a href="/About">About</a>
              </li>
              <li className="p__opensans">
                <a href="/Menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="/Awards">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
