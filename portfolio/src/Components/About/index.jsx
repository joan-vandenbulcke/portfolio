import './styles.scss';
import picture from '../../assets/photo-site.jpg';
import { MdRadioButtonChecked } from "react-icons/md";

const About = () => (
  <section id='about' className="about">
    <h2 className="about-title"><span className='numbers-span'>01.</span> About me</h2>
    <div className="about-container">
      <div className="about-container-left">
        <p className="about-container-left-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a ante lectus. Nulla fringilla at nibh sit amet varius. Etiam semper, dui id pharetra facilisis, nunc nunc suscipit est, ac convallis orci tortor laoreet erat.</p>
        <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a ante lectus. Nulla fringilla at nibh sit amet varius. Etiam semper, dui id pharetra facilisis, nunc nunc suscipit est, ac convallis orci tortor laoreet erat.</p>
        <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a ante lectus. Nulla fringilla at nibh sit amet varius. Etiam semper, dui id pharetra facilisis, nunc nunc suscipit est, ac convallis orci tortor laoreet erat.</p>
        <p className="about-text">My skills :</p>
        <ul className="about-list">
          <li className="about-list-item"><MdRadioButtonChecked /> Javascript ES6+</li>
          <li className="about-list-item"><MdRadioButtonChecked /> React</li>
          <li className="about-list-item"><MdRadioButtonChecked /> Node.js</li>
          <li className="about-list-item"><MdRadioButtonChecked /> PostgreSQL</li>
          <li className="about-list-item"><MdRadioButtonChecked /> Express</li>
          <li className="about-list-item"><MdRadioButtonChecked /> Redux</li>
        </ul>
      </div>
      <div className="about-container-right">
        <img className="personal-picture" src={picture} alt="My picture" />
      </div>
    </div>
  </section>
);

export default About;
