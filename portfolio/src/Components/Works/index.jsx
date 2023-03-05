import './styles.scss';
import { useState } from 'react';

const Works = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className="work">
      <h2 className="work-title"><span className='numbers-span'>02.</span> Experience</h2>
      <div className="inner">
        <div className="tablist">
          <button
            className={toggleState === 1 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(1)}
          >EVAS - Planet care
          </button>
          <button
            className={toggleState === 2 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(2)}
          >AKINAI - Communication & Marketing
          </button>
          <button
            className={toggleState === 3 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(3)}
          >Freelance - Digital Marketing
          </button>
          <button
            className={toggleState === 4 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(4)}
          >Escil - Industry
          </button>
          <button
            className={toggleState === 5 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(5)}
          >CIC & Crédit Agricole - Bank
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            <h3 className="tab-title">Front-end web developer <span className='company-span'>@ EVAS</span></h3>
            <p className="tab-date">February to March 2023</p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <li className="tab-description__list__item">Brief with customer, project specifications, planning</li>
                <li className="tab-description__list__item">Choice of programming language and librairies/frameworks</li>
                <li className="tab-description__list__item">Front-end development</li>
                <li className="tab-description__list__item">Help back-end team for the database</li>
              </ul>
            </div>
          </div>

          <div
            className={toggleState === 2 ? "content active-content" : "content"}
          >
            <h3 className="tab-title">Director and Marketing Manager<span className='company-span'>@ AKINAI</span></h3>
            <p className="tab-date">2020 to 2022</p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <li className="tab-description__list__item">Refontes et gestion de sites web clients</li>
                <li className="tab-description__list__item">Pilotage des projets clients et projets internes</li>
                <li className="tab-description__list__item">Planification et producation / réalisation des contenus</li>
                <li className="tab-description__list__item">Gestion administrative, tarification et développement commercial</li>
                <li className="tab-description__list__item">Gestion des relations clients, prestataires et partenaires</li>
                <li className="tab-description__list__item">Gestion d'un grand réseau de panneaux d'affichage</li>
                <li className="tab-description__list__item">Gestion de diverses campagnes clients</li>
              </ul>
            </div>
          </div>

          <div
            className={toggleState === 3 ? "content active-content" : "content"}
          >
            <h3 className="tab-title">Digital marketing freelance<span className='company-span'>@ Freelance</span></h3>
            <p className="tab-date">2019 to 2020</p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <li className="tab-description__list__item">Création de sites web et contenus web divers</li>
                <li className="tab-description__list__item">Consulting et audits marketing digital</li>
              </ul>
            </div>
          </div>

          <div
            className={toggleState === 4 ? "content active-content" : "content"}
          >
            <h3 className="tab-title">Digital marketing manager<span className='company-span'>@ ESCIL</span></h3>
            <p className="tab-date">2017 to 2019</p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <li className="tab-description__list__item">Gestion du projet de refonte du site web e-commerce</li>
                <li className="tab-description__list__item">Gestion du site e-commerce</li>
                <li className="tab-description__list__item">Community management, sponsoring, création de contenus</li>
              </ul>
            </div>
          </div>

          <div
            className={toggleState === 5 ? "content active-content" : "content"}
          >
            <h3 className="tab-title">Bank client advisor<span className='company-span'>@ CIC & Crédit Agricole</span></h3>
            <p className="tab-date">2014 to 2016 (check dates)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
