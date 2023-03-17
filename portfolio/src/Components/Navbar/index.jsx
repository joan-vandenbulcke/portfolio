import './styles.scss';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {

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

  return (
    <div id='navbar' className="navbar">
      <nav className="navbar-container">
        <Link onClick={scrollToTop} className='navbar-link__logo'>
          <p className='navbar-logo'>JV</p>
        </Link>
        <div className="navbar-right">
          <ol className="navbar-links">
            <li
              className="navbar-item">
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
              className="navbar-item">
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
              className="navbar-item">
              <ScrollLink
                to='projects'
                spy={true}
                smooth={true}
                duration={500}
                offset={-150}
                className="navbar-item-link">
                <span className='navbar-span'>3.  </span>Projects
              </ScrollLink>
            </li>
            <li
              className="navbar-item">
              <ScrollLink
                to='skills'
                spy={true}
                smooth={true}
                duration={500}
                offset={-150}
                className="navbar-item-link">
                <span className='navbar-span'>4.  </span>Skills
              </ScrollLink>
            </li>
            <li
              className="navbar-item">
              <ScrollLink
                to='school'
                spy={true}
                smooth={true}
                duration={500}
                className="navbar-item-link">
                <span className='navbar-span'>5.  </span>School
              </ScrollLink>
            </li>
            <li
              className="navbar-item">
              <ScrollLink
                to='contact'
                spy={true}
                smooth={true}
                duration={500}
                className="navbar-item-link">
                <span className='navbar-span'>6.  </span>Contact
              </ScrollLink>
            </li>
          </ol>
          <a className='navbar-display__pdf' href="src\assets\cv-joan-vandenbulcke.pdf" target="_blank">
            <button className="menu-button">CV / Resume <ArrowCircleDownRoundedIcon className='navbar-download__icon icon' /></button>
          </a>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
