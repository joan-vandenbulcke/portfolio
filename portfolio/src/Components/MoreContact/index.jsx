import './styles.scss';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {

  return (
    <footer id='footer' className='footer'>
      <div className='more-contact'>
        <ul className='networks-list'>
          <li className='networks-list__github'>
            <a href="https://github.com/joan-vandenbulcke" target="_blank">
              <AiFillGithub className='more-contact__icon' />
            </a>
          </li>
          <li className='networks-list__linkedin'>
            <a href="https://www.linkedin.com/in/joan-vandenbulcke/" target="_blank">
              <AiFillLinkedin className='more-contact__icon' />
            </a>
          </li>
        </ul>
      </div>
      <p className='footer-text'>Designed & Built by Joan Vandenbulcke</p>
    </footer>
  )
};

export default Footer;
