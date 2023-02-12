import './styles.scss';
import { useState } from 'react';

const Works = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className="work">
      <h2 className="work-title">2. Where I've worked</h2>
      <div className="inner">
        <div className="tablist">
          <button
            className={toggleState === 1 ? "tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(1)}
          >EVAS - Planet care
          </button>
          <button
            className={toggleState === 2 ? "tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(2)}
          >AKINAI
          </button>
          <button
            className={toggleState === 3 ? "tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(3)}
          >Escil
          </button>
          <button
            className={toggleState === 4 ? "tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(4)}
          >Crédit Agricole
          </button>
          <button
            className={toggleState === 5 ? "tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(5)}
          >CIC
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            <h3 className="tab-title">Front-end web developer</h3>
            <p className="tab-date">February to March 2023</p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <li className="tab-description__list__item">tab 1</li>
                <li className="tab-description__list__item">tab 1</li>
                <li className="tab-description__list__item">tab 1</li>
              </ul>
            </div>
          </div>
          <div
            className={toggleState === 2 ? "content active-content" : "content"}
          >
            <h3 className="tab-title">Director and Marketing Manager</h3>
            <p className="tab-date">2020 to 2022</p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <li className="tab-description__list__item">tab 1</li>
                <li className="tab-description__list__item">tab 1</li>
                <li className="tab-description__list__item">tab 1</li>
              </ul>
            </div>
          </div>
          <div
            className={toggleState === 3 ? "content active-content" : "content"}
          >
            <h3 className="tab-title">Front-end web developer</h3>
            <p className="tab-date">February to March 2023</p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <li className="tab-description__list__item">tab 1</li>
                <li className="tab-description__list__item">tab 1</li>
                <li className="tab-description__list__item">tab 1</li>
              </ul>
            </div>
          </div>
          <div
            className={toggleState === 4 ? "content active-content" : "content"}
          >
            <h3 className="tab-title">Front-end web developer</h3>
            <p className="tab-date">February to March 2023</p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <li className="tab-description__list__item">tab 1</li>
                <li className="tab-description__list__item">tab 1</li>
                <li className="tab-description__list__item">tab 1</li>
              </ul>
            </div>
          </div>
          <div
            className={toggleState === 5 ? "content active-content" : "content"}
          >
            <h3 className="tab-title">Front-end web developer</h3>
            <p className="tab-date">February to March 2023</p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <li className="tab-description__list__item">tab 1</li>
                <li className="tab-description__list__item">tab 1</li>
                <li className="tab-description__list__item">tab 1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
