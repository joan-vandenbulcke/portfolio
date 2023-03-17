import './styles.scss';
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { BsCode } from "react-icons/bs";
import { FaSass } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsGit } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { GoSettings } from "react-icons/go";
import { DiScrum } from "react-icons/di";
import { BsWordpress } from "react-icons/bs";
import { FaListOl } from "react-icons/fa";
// import { DiScrum } from "react-icons/di";
// import { DiScrum } from "react-icons/di";

const Skills = () => {

  return (
    <section id='skills' className='skills'>
      <h2 className='skills-title'><span className='numbers-span'>04.</span>Skills</h2>
      {/* MAIN LANGUAGES */}
      <h3 className='languages-title'>Web development languages</h3>
      <div className='skills-container'>
        <div className='skill skill-html'>
          <AiFillHtml5 className='skill-icon skill-icon__html' />
          <p className='skill-name'>HTML</p>
        </div>
        <div className='skill skill-css'>
          <DiCss3 className='skill-icon skill-icon__css' />
          <p className='skill-name'>CSS</p>
        </div>
        <div className='skill skill-js'>
          <SiJavascript className='skill-icon skill-icon__js' />
          <p className='skill-name'>Javascript</p>
        </div>
        <div className='skill skill-sql'>
          <FaDatabase className='skill-icon skill-icon__sql' />
          <p className='skill-name'>SQL</p>
        </div>
      </div>
      {/* SECOND LANGUAGES */}
      <h3 className='languages-title'>Frameworks/librairies and other development technos</h3>
      {/* FIRST ROW */}
      <div className='skills-container'>
        <div className='skill skill-react'>
          <FaReact className='skill-icon skill-icon__react' />
          <p className='skill-name'>React</p>
        </div>
        <div className='skill skill-redux'>
          <SiRedux className='skill-icon skill-icon__redux' />
          <p className='skill-name'>Redux</p>
        </div>
        <div className='skill skill-node'>
          <FaNodeJs className='skill-icon skill-icon__node' />
          <p className='skill-name'>NodeJS</p>
        </div>
        <div className='skill skill-express'>
          <SiExpress className='skill-icon skill-icon__express' />
          <p className='skill-name'>ExpressJS</p>
        </div>
      </div>
      {/* 2ND ROW */}
      <div className='skills-container'>
        <div className='skill skill-postgre'>
          <SiPostgresql className='skill-icon skill-icon__postgre' />
          <p className='skill-name'>PostgreSQL</p>
        </div>
        <div className='skill skill-sequelize'>
          <SiSequelize className='skill-icon skill-icon__sequelize' />
          <p className='skill-name'>Sequelize</p>
        </div>
        <div className='skill skill-api'>
          <AiFillApi className='skill-icon skill-icon__api' />
          <p className='skill-name'>API</p>
        </div>
        <div className='skill skill-ejs'>
          <BsCode className='skill-icon skill-icon__ejs' />
          <p className='skill-name'>EJS</p>
        </div>
      </div>
      {/* 3RD ROW */}
      <div className='skills-container'>
        <div className='skill skill-scss'>
          <FaSass className='skill-icon skill-icon__scss' />
          <p className='skill-name'>SCSS</p>
        </div>
        <div className='skill skill-git'>
          <BsGit className='skill-icon skill-icon__git' />
          <p className='skill-name'>Git</p>
        </div>
        <div className='skill skill-github'>
          <AiFillGithub className='skill-icon skill-icon__github' />
          <p className='skill-name'>Github</p>
        </div>
      </div>
      {/* OTHER SKILLS */}
      <h3 className='languages-title'>Sample of my Creation skills</h3>
      <div className='skills-container'>
        <div className='skill skill-figma'>
          <FaFigma className='skill-icon skill-icon__figma' />
          <p className='skill-name'>Figma</p>
        </div>
        <div className='skill skill-photoshop'>
          <SiAdobephotoshop className='skill-icon skill-icon__photoshop' />
          <p className='skill-name'>Photoshop</p>
        </div>
        <div className='skill skill-illustrator'>
          <SiAdobeillustrator className='skill-icon skill-icon__illustrator' />
          <p className='skill-name'>Illustrator</p>
        </div>
        <div className='skill skill-premiere'>
          <SiAdobepremierepro className='skill-icon skill-icon__premiere' />
          <p className='skill-name'>Premiere Pro</p>
        </div>
      </div>
      {/* OTHER SKILLS */}
      <h3 className='languages-title'>Other skills</h3>
      <div className='skills-container'>
        <div className='skill skill-project'>
          <GoSettings className='skill-icon skill-icon__project' />
          <p className='skill-name'>Project management</p>
        </div>
        <div className='skill skill-icon__scrum'>
          <DiScrum className='skill-icon skill-icon__scrum' />
          <p className='skill-name'>SCRUM</p>
        </div>
        <div className='skill skill-wordpress'>
          <BsWordpress className='skill-icon skill-icon__wordpress' />
          <p className='skill-name'>Wordpress</p>
        </div>
        <div className='skill skill-seo'>
          <FaListOl className='skill-icon skill-icon__seo' />
          <p className='skill-name'>SEO / Marketing</p>
        </div>
      </div>
    </section>
  )
}

export default Skills