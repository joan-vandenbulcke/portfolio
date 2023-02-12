import './styles.scss';

const Work = () => (
  <section className="work">
    <h2>Where I've worked</h2>
    <div className="inner">
      <div className="tablist">
        <button className="tablist-item">EVAS</button>
        <button className="tablist-item">AKINAI</button>
        <button className="tablist-item">ESCIL</button>
        <button className="tablist-item">Crédit Agricole</button>
        <button className="tablist-item">CIC</button>
      </div>
      <div className="jobs">
        <div className="job">
          <h3 className="job-title">Front-end web developer</h3>
          <p className="job-date">February to March 2023</p>
          <div className="job-description">
            <ul className="job-description__list">
              <li className="job-description__list__item">Job 1</li>
              <li className="job-description__list__item">Job 1</li>
              <li className="job-description__list__item">Job 1</li>
              <li className="job-description__list__item">Job 1</li>
              <li className="job-description__list__item">Job 1</li>
              <li className="job-description__list__item">Job 1</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Work;
