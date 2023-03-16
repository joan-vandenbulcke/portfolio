import './styles.scss';
import Evas from '../../assets/projects/evas.png';
import Ghibli from '../../assets/projects/ghibli.png';
import WebDev from '../../assets/projects/web-development.png'

import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

const Projects = () => (
  <section id='projects' className="projects">
    <div className='projects-header'>
      <h2 className="projects-title"><span className='numbers-span'>03.</span> Projects</h2>
      <p>Découvrez les projets sur lesquels j'ai travaillé ces dernières semaines et apprenez-en plus sur mon parcours en allant les visiter !</p>
      <p className="projects-description">N'hésitez pas à vous créer un compte sur le site EVAS et à tester les fonctionnalités de création d'une association ou d'un projet et toute autre fonctionnalité ajoutée sur la plateforme. </p>
    </div>
    <div className='cards-container'>
      <div className="card-wrapper">
        <div className='card-image-container evas'>
          <img className='evas-img' src={Evas} alt="personnages ghibli" />
        </div>
        <p className='card-reference'>School Project / Real company</p>
        <h3 className='card-title'>EVAS Website</h3>
        <div className='card-tags'>
          <div className='card-tag react'>React <FaReact /></div>
          <div className='card-tag scss'>SCSS <FaSass /></div>
          <div className='card-tag node'>NodeJS <FaNodeJs /></div>
          <div className='card-tag express'>Express <SiExpress /></div>
          <div className='card-tag postgre'>PostgreSQL <SiPostgresql /></div>
        </div>
        <p className='card-description'>J'ai occupé le poste de développeur front-end React pour l'entreprise EVAS qui met en relation des entreprises et des associations pour financer des projets environnementaux. </p>
        <div className='card-links__evas'>
          <a className='blocked-link'>
            <div className='card-link card-link__evas view'>
              <GitHubIcon />
              <p className='card-link__view--text'>Github Repo</p>
            </div>
          </a>
          <a href="https://evas-front.netlify.app/" target="_blank">
            <div className='card-link card-link__evas github'>
              <OpenInNewRoundedIcon />
              <p className='card-link__view--text'>View online</p>
            </div>
          </a>
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
          <div className='card-tag html'>HTML <FaHtml5 /></div>
          <div className='card-tag node'>NodeJS <FaNodeJs /></div>
          <div className='card-tag express'>Express <SiExpress /></div>
          <div className='card-tag ejs'>EJS</div>
          <div className='card-tag scss'>SCSS <FaSass /></div>
        </div>
        <p className='card-description'>Ce site référence les différentes productions des studios Ghibli dans une présentation simple. C'est un side project réalisé pour m'exercer à la manipulation de NodeJS, Express et le rendu de données en EJS.</p>
        <div className='card-links__ghibli'>
          <a href="https://github.com/joan-vandenbulcke/Ghibliotheque" target="_blank">
            <div className='card-link card-link__ghibli view'>
              <GitHubIcon />
              <p className='card-link__view--text'>Github Repo</p>
            </div>
          </a>
          <a href="https://ghibli-joan-vandenbulcke.up.railway.app/" target="_blank">
            <div className='card-link card-link__ghibli github'>
              <OpenInNewRoundedIcon />
              <p className='card-link__view--text'>View online</p>
            </div>
          </a>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div className="card-wrapper">
        <div className='card-image-container portfolio'>
          <img className='portfolio-img' src={WebDev} alt="personnages ghibli" />
        </div>
        <p className='card-reference'>Portfolio</p>
        <h3 className='card-title'>This website</h3>
        <div className='card-tags'>
          <div className='card-tag html'>HTML <FaHtml5 /></div>
          <div className='card-tag scss'>SCSS <FaSass /></div>
          <div className='card-tag javascript'>Javascript <SiJavascript /></div>
          <div className='card-tag react'>React<FaReact /></div>
        </div>
        <p className='card-description'>Ce site référence les différentes productions des studios Ghibli dans une présentation simple. C'est un side project réalisé pour m'exercer à la manipulation de NodeJS, Express et le rendu de données en EJS.</p>
        <div className='card-links__portfolio'>
          <a className='blocked-link' target="_blank">
            <div className='card-link card-link__portfolio view'>
              <GitHubIcon />
              <p className='card-link__view--text'>Github Repo</p>
            </div>
          </a>
          <a target="_blank">
            <div className='card-link card-link__portfolio github'>
              <OpenInNewRoundedIcon />
              <p className='card-link__view--text'>View online</p>
            </div>
          </a>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
    </div>
  </section >
);

export default Projects;
