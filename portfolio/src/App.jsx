import './App.css';
import AppHeader from './Components/AppHeader';
import Content from './Components/Content';
import About from './Components/About';
import Works from './Components/Works';

const App = () => {

  return (
    <div className="app">
      <AppHeader />
      <Content />
      <About />
      <Works />
    </div>
  )
}

export default App
