import './styles.scss';
import TimelineContainer from './TimelineContainer';

const Timeline = () => (
  <section className='school'>
    <div className='school-head'>
      <h2 className="school-title"><span className='numbers-span'>04.</span> School</h2>
      <p className='school-title__text'>Discover my previous trainings bellow. More details in my Resume.</p>
    </div>
    <TimelineContainer />
  </section>
)

export default Timeline