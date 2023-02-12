import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import AppHeader from './Components/AppHeader';
import Content from './Components/Content';
import About from './Components/About';
import Works from './Components/Works';

function App() {
  const [count, setCount] = useState(0)

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
