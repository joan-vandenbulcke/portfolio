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
            <a className="navbar-item-link" href=""><span className='navbar-span'>1.  </span>About</a>
          </li>
          <li
            className="navbar-item">
            <a className="navbar-item-link" href=""><span className='navbar-span'>2. </span>Experience</a>
          </li>
          <li
            className="navbar-item">
            <a className="navbar-item-link" href=""><span className='navbar-span'>3. </span>Work</a>
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
        <button className="menu-button">Resume</button>
      </div>
    </nav>
  </div>
);

export default Navbar;
