import './styles.scss';
import reactLogo from '../../assets/react.svg';

const Navbar = () => (
  <div className="navbar">
    <nav className="navbar-container">
      <img src={reactLogo} className="logo" alt="logo portfolio" />
      <div className="navbar-right">
        <ol className="navbar-links">
          <li
            className="navbar-item">
            <a className="navbar-item-link" href="">About</a>
          </li>
          <li
            className="navbar-item">
            <a className="navbar-item-link" href="">Experience</a>
          </li>
          <li
            className="navbar-item">
            <a className="navbar-item-link" href="">Work</a>
          </li>
          <li
            className="navbar-item">
            <a className="navbar-item-link" href="">School</a>
          </li>
          <li
            className="navbar-item">
            <a className="navbar-item-link" href="">Contact</a>
          </li>
        </ol>
        <button className="menu-button">Resume</button>
      </div>
    </nav>
  </div>
);

export default Navbar;
