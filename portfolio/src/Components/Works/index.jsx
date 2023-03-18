import './styles.scss';
import { useState } from 'react';

const Works = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section id='work' className="work">
      <h2 className="work-title"><span className='numbers-span'>02.</span> Experience</h2>
      <div className="inner">
        <div className="tablist">
          <button
            className={toggleState === 1 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(1)}
          >EVAS
          </button>
          <button
            className={toggleState === 2 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(2)}
          >AKINAI
          </button>
          <button
            className={toggleState === 3 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(3)}
          >Freelance
          </button>
          <button
            className={toggleState === 4 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(4)}
          >Escil
          </button>
          <button
            className={toggleState === 5 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(5)}
          >CIC & Crédit Agricole
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
                <li className="tab-description__list--item">Brief with customer, project specifications, planning</li>
                <li className="tab-description__list--item">Choice of programming language and librairies/frameworks</li>
                <li className="tab-description__list--item">Front-end development</li>
                <li className="tab-description__list--item">Help back-end team for the database</li>
              </ul>
              <p>More details in Projects : check out the project link bellow !</p>
            </div>
          </div>

          <div
            className={toggleState === 2 ? "content active-content" : "content"}
          >
            <h3 className="tab-title">Director and Marketing Manager<span className='company-span'>@ AKINAI</span></h3>
            <p className="tab-date">2020 to 2022</p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <li className="tab-description__list__item">Website redesigns and management for clients</li>
                <li className="tab-description__list__item">Management of client and internal projects</li>
                <li className="tab-description__list__item">Planning and production of content</li>
                <li className="tab-description__list__item">Administrative management, pricing, and business development</li>
                <li className="tab-description__list__item">Management of client, provider, and partner relationships</li>
                <li className="tab-description__list__item">Management of a large network of billboards</li>
                <li className="tab-description__list__item">Management of various client campaigns</li>
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
                <li className="tab-description__list__item">Creation of websites and various web content</li>
                <li className="tab-description__list__item">Consulting and digital marketing audits</li>
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
                <li className="tab-description__list__item">Management of the e-commerce website redesign project</li>
                <li className="tab-description__list__item">Management of the e-commerce website</li>
                <li className="tab-description__list__item">Community management, sponsorship, content creation</li>
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
