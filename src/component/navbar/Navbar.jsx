import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import menu_icon from "../../assets/menu-icon.png";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [moblieMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    moblieMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className={`navbar ${sticky ? "dark-nav" : ""}`}>
      <h1 className="logo container">Eduspark</h1>

      <ul className={moblieMenu? '' :"hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-256} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500}>
            <i className="fa-solid fa-user"></i>
          </Link>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="menu-icon"
        className="menu-icon "
        onClick={toggleMenu}
      />
    </nav>
  );
}
