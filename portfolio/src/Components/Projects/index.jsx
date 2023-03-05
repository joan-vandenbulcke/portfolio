import './styles.scss';

import Ghibli from '../../assets/projects/ghibli.png';
import View from '../../assets/projects/view.png';
import Github from '../../assets/projects/github.png';
import Evas from '../../assets/projects/evas.png';

const Projects = () => (
  <section className="projects">
    <h2 className="projects-title"><span className='numbers-span'>03.</span> Projects</h2>
    <div className='cards-container'>
      <div className="card-wrapper">
        <div className='card-image-container evas'>
          <img className='evas-img' src={Evas} alt="personnages ghibli" />
        </div>
        <p className='card-reference'>School Project / Real company</p>
        <h3 className='card-title'>EVAS Website</h3>
        <div className='card-tags'>
          <div className='card-tag react'>ReactJS</div>
          <div className='card-tag scss'>SCSS</div>
          <div className='card-tag node'>NodeJS</div>
          <div className='card-tag express'>Express</div>
          <div className='card-tag sequelize'>Sequelize</div>
          <div className='card-tag postgre'>PostgreSQL</div>
        </div>
        <p className='card-description'>J'ai occupé le poste de développeur front-end React pour l'entreprise EVAS qui met en relation des entreprises et des associations pour financer des projets environnementaux. </p>
        <div className='card-links__evas'>
          <div className='card-link view'>
            <img className='card-link__view--image' src={Github} alt="" />
            <p className='card-link__view--text'>Github Repo</p>
          </div>
          <div className='card-link github'>
            <img className='card-link__view--image' src={View} alt="" />
            <p className='card-link__view--text'>View online</p>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div className="card-wrapper">
        <div className='card-image-container ghibli'>
          <img className='ghibli-img' src={Ghibli} alt="personnages ghibli" />
        </div>
        <p className='card-reference'>Personal Side Project</p>
        <h3 className='card-title'>Studios Ghibli Register</h3>
        <div className='card-tags'>
          <div className='card-tag node'>NodeJS</div>
          <div className='card-tag express'>Express</div>
          <div className='card-tag ejs'>EJS</div>
          <div className='card-tag scss'>SCSS</div>
        </div>
        <p className='card-description'>Ce site référence les différentes productions des studios Ghibli dans une présentation simple. C'est un side project réalisé pour m'exercer à la manipulation de NodeJS, Express et le rendu de données en EJS.</p>
        <div className='card-links__ghibli'>
          <div className='card-link view'>
            <img className='card-link__view--image' src={Github} alt="" />
            <p className='card-link__view--text'>Github Repo</p>
          </div>
          <div className='card-link github'>
            <img className='card-link__view--image' src={View} alt="" />
            <p className='card-link__view--text'>View online</p>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div className="card-wrapper">
        <div className='card-image-container ghibli'>
          <img className='ghibli-img' src={Ghibli} alt="personnages ghibli" />
        </div>
        <p className='card-reference'>Personal Side Project</p>
        <h3 className='card-title'>Studios Ghibli Register</h3>
        <div className='card-tags'>
          <div className='card-tag node'>NodeJS</div>
          <div className='card-tag express'>Express</div>
          <div className='card-tag ejs'>EJS</div>
          <div className='card-tag scss'>SCSS</div>
        </div>
        <p className='card-description'>Ce site référence les différentes productions des studios Ghibli dans une présentation simple. C'est un side project réalisé pour m'exercer à la manipulation de NodeJS, Express et le rendu de données en EJS.</p>
        <div className='card-links__ghibli'>
          <div className='card-link view'>
            <img className='card-link__view--image' src={Github} alt="" />
            <p className='card-link__view--text'>Github Repo</p>
          </div>
          <div className='card-link github'>
            <img className='card-link__view--image' src={View} alt="" />
            <p className='card-link__view--text'>View online</p>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div className="card-wrapper">
        <div className='card-image-container ghibli'>
          <img className='ghibli-img' src={Ghibli} alt="personnages ghibli" />
        </div>
        <p className='card-reference'>Personal Side Project</p>
        <h3 className='card-title'>Studios Ghibli Register</h3>
        <div className='card-tags'>
          <div className='card-tag node'>NodeJS</div>
          <div className='card-tag express'>Express</div>
          <div className='card-tag ejs'>EJS</div>
          <div className='card-tag scss'>SCSS</div>
        </div>
        <p className='card-description'>Ce site référence les différentes productions des studios Ghibli dans une présentation simple. C'est un side project réalisé pour m'exercer à la manipulation de NodeJS, Express et le rendu de données en EJS.</p>
        <div className='card-links__ghibli'>
          <div className='card-link view'>
            <img className='card-link__view--image' src={Github} alt="" />
            <p className='card-link__view--text'>Github Repo</p>
          </div>
          <div className='card-link github'>
            <img className='card-link__view--image' src={View} alt="" />
            <p className='card-link__view--text'>View online</p>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div className="card-wrapper">
        <div className='card-image-container ghibli'>
          <img className='ghibli-img' src={Ghibli} alt="personnages ghibli" />
        </div>
        <p className='card-reference'>Personal Side Project</p>
        <h3 className='card-title'>Studios Ghibli Register</h3>
        <div className='card-tags'>
          <div className='card-tag node'>NodeJS</div>
          <div className='card-tag express'>Express</div>
          <div className='card-tag ejs'>EJS</div>
          <div className='card-tag scss'>SCSS</div>
        </div>
        <p className='card-description'>Ce site référence les différentes productions des studios Ghibli dans une présentation simple. C'est un side project réalisé pour m'exercer à la manipulation de NodeJS, Express et le rendu de données en EJS.</p>
        <div className='card-links__ghibli'>
          <div className='card-link view'>
            <img className='card-link__view--image' src={Github} alt="" />
            <p className='card-link__view--text'>Github Repo</p>
          </div>
          <div className='card-link github'>
            <img className='card-link__view--image' src={View} alt="" />
            <p className='card-link__view--text'>View online</p>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div className="card-wrapper">
        <div className='card-image-container ghibli'>
          <img className='ghibli-img' src={Ghibli} alt="personnages ghibli" />
        </div>
        <p className='card-reference'>Personal Side Project</p>
        <h3 className='card-title'>Studios Ghibli Register</h3>
        <div className='card-tags'>
          <div className='card-tag node'>NodeJS</div>
          <div className='card-tag express'>Express</div>
          <div className='card-tag ejs'>EJS</div>
          <div className='card-tag scss'>SCSS</div>
        </div>
        <p className='card-description'>Ce site référence les différentes productions des studios Ghibli dans une présentation simple. C'est un side project réalisé pour m'exercer à la manipulation de NodeJS, Express et le rendu de données en EJS.</p>
        <div className='card-links__ghibli'>
          <div className='card-link view'>
            <img className='card-link__view--image' src={Github} alt="" />
            <p className='card-link__view--text'>Github Repo</p>
          </div>
          <div className='card-link github'>
            <img className='card-link__view--image' src={View} alt="" />
            <p className='card-link__view--text'>View online</p>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
    </div>
  </section >
);

export default Projects;
