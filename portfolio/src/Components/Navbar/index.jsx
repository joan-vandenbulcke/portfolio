import './styles.scss';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
              <a className="navbar-item-link" href=""><span className='navbar-span'>1.  </span>About</a>
            </li>
            <li
              className="navbar-item">
              <a className="navbar-item-link" href=""><span className='navbar-span'>2. </span>Experience</a>
            </li>
            <li
              className="navbar-item">
              <a className="navbar-item-link" href=""><span className='navbar-span'>3. </span>Projects</a>
            </li>
            <li
              className="navbar-item">
              <a className="navbar-item-link" href=""><span className='navbar-span'>4. </span>School</a>
            </li>
            <li
              className="navbar-item">
              <a className="navbar-item-link" href=""><span className='navbar-span'>5. </span>Contact</a>
            </li>
          </ol>
          <button className="menu-button">Resume <ArrowCircleDownRoundedIcon className='navbar-download__icon icon' /></button>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
