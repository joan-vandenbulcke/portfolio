import './styles.scss';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  // SCROLL TO TOP
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToWorks = () => {
    window.scrollTo('#projects', {
      behavior: 'smooth'
    })
  }
  // --------------------------
  return (
    <div id='navbar' className="navbar">
      <nav className={`navbar-container ${showLinks ? "show-navbar" : "hide-nav"}`}>
        <Link onClick={scrollToTop} className='navbar-link__logo'>
          <p className='navbar-logo'>JV</p>
        </Link>
        <div className="navbar-right">
          <ol className="navbar-links">
            <li
              className="navbar-item"
              onClick={handleShowLinks}
            >
              <ScrollLink
                to='about'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navbar-item-link">
                <span className='navbar-span'>1.  </span>About
              </ScrollLink>
            </li>
            <li
              className="navbar-item"
              onClick={handleShowLinks}
            >
              <ScrollLink
                to='work'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navbar-item-link">
                <span className='navbar-span'>2.  </span>Experience
              </ScrollLink>
              {/* <a className="navbar-item-link" href="#work"><span className='navbar-span'>2. </span>Expériences</a> */}
            </li>
            <li
              className="navbar-item"
              onClick={handleShowLinks}
            >
              <ScrollLink
                to='projects'
                spy={true}
                smooth={true}
                duration={500}
                className="navbar-item-link">
                <span className='navbar-span'>3.  </span>Projects
              </ScrollLink>
            </li>
            <li
              className="navbar-item"
              onClick={handleShowLinks}
            >
              <ScrollLink
                to='skills'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navbar-item-link">
                <span className='navbar-span'>4.  </span>Skills
              </ScrollLink>
            </li>
            <li
              className="navbar-item"
              onClick={handleShowLinks}
            >
              <ScrollLink
                to='school'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navbar-item-link">
                <span className='navbar-span'>5.  </span>School
              </ScrollLink>
            </li>
            <li
              className="navbar-item"
              onClick={handleShowLinks}
            >
              <ScrollLink
                to='contact'
                spy={true}
                smooth={true}
                duration={500}
                className="navbar-item-link">
                <span className='navbar-span'>6.  </span>Contact
              </ScrollLink>
            </li>
            <a className='navbar-display__pdf' href="src\assets\cv-joan-vandenbulcke.pdf" target="_blank">
              <button className="menu-button">CV / Resume <ArrowCircleDownRoundedIcon className='navbar-download__icon icon' /></button>
            </a>
          </ol>
          <button onClick={handleShowLinks} className='navbar-burger'>
            <span className='burger-bar'></span>
          </button>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
