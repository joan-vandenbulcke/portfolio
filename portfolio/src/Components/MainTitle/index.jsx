import './styles.scss';
import { Link as ScrollLink } from 'react-scroll';

const MainTitle = () => (
  <div className="title">
    <p className="title-hello span">Hello, my name is</p>
    <h1 className="title-name">Joan Vandenbulcke.</h1>
    <h2 className="title-catch">I build things for the web.</h2>
    <p className="title-intro">Ut ac tortor vitae sapien molestie accumsan. Maecenas facilisis felis dui, nec tristique eros elementum sit amet. Mauris a egestas tortor, sit amet aliquet ante.</p>
    <a href="#projects">
      <button className="title-button">
        <ScrollLink
          to='projects'
          spy={true}
          smooth={true}
          duration={500}
          offset={-150}
        >
          Check my projects !
        </ScrollLink>
      </button>
    </a>
  </div>
);

export default MainTitle;
