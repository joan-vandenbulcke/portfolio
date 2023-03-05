import './App.scss';
import AppHeader from './Components/AppHeader';
import Content from './Components/Content';
import About from './Components/About';
import Works from './Components/Works';
import Projects from './Components/Projects';
import TimelineComponent from './Components/Timeline';

const App = () => {

  return (
    <div className="app">
      <AppHeader />
      <Content />
      <About />
      <Works />
      <Projects />
      <TimelineComponent />
    </div>
  )
}

export default App
