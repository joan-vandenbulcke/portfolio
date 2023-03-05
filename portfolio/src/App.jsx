import './App.scss';
import AppHeader from './Components/AppHeader';
import Content from './Components/Content';
import About from './Components/About';
import Works from './Components/Works';
import Projects from './Components/Projects';

const App = () => {

  return (
    <div className="app">
      <AppHeader />
      <Content />
      <About />
      <Works />
      <Projects />
    </div>
  )
}

export default App
