import './styles.scss';
import { Link as ScrollLink } from 'react-scroll';

const MainTitle = () => (
  <div className="title">
    <p className="title-hello span">Hello, my name is</p>
    <h1 className="title-name">Joan Vandenbulcke.</h1>
    <h2 className="title-catch">I am a JavaScript web developer.</h2>
    <p className="title-intro">Discover my portfolio through my professional experiences, my education, and my projects ! More information to come, stay tuned !</p>
    <a href="#projects">
      <button className="title-button">
        <ScrollLink
          to='projects'
          spy={true}
          smooth={true}
          duration={500}
        >
          Take a look at my projects !
        </ScrollLink>
      </button>
    </a>
  </div>
);

export default MainTitle;
