import './styles.scss';
import picture from '../../assets/photo-site.jpg';

const About = () => (
  <section className="about">
    <h2 className="about-title"><span className='numbers-span'>01.</span> About me</h2>
    <div className="about-container">
      <div className="about-container-left">
        <p className="about-container-left-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a ante lectus. Nulla fringilla at nibh sit amet varius. Etiam semper, dui id pharetra facilisis, nunc nunc suscipit est, ac convallis orci tortor laoreet erat.</p>
        <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a ante lectus. Nulla fringilla at nibh sit amet varius. Etiam semper, dui id pharetra facilisis, nunc nunc suscipit est, ac convallis orci tortor laoreet erat.</p>
        <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a ante lectus. Nulla fringilla at nibh sit amet varius. Etiam semper, dui id pharetra facilisis, nunc nunc suscipit est, ac convallis orci tortor laoreet erat.</p>
        <p className="about-text">My skills :</p>
        <ul className="about-list">
          <li className="about-list-item">Javascript ES6+</li>
          <li className="about-list-item">React</li>
          <li className="about-list-item">Node.js</li>
          <li className="about-list-item">PostgreSQL</li>
          <li className="about-list-item">Express</li>
          <li className="about-list-item">Sequelize</li>
        </ul>
      </div>
      <div className="about-container-right">
        <img className="personal-picture" src={picture} alt="My picture" />
      </div>
    </div>
  </section>
);

export default About;
