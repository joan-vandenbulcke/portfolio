import './App.scss';
import AppHeader from './Components/AppHeader';
import Content from './Components/Content';
import About from './Components/About';
import Works from './Components/Works';
import Projects from './Components/Projects';
import Timeline from './Components/Timeline';
import ContactForm from './Components/ContactForm';
import ScrollUpButton from './Components/ScrollUpButton';
import Skills from './Components/Skills';

const App = () => {

  return (
    <div className="app">
      <AppHeader />
      <Content />
      <About />
      <Works />
      <Projects />
      <Skills />
      <Timeline />
      <ContactForm />
      <ScrollUpButton />
    </div>
  )
}

export default App
