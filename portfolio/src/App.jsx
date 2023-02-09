import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import AppHeader from './Components/AppHeader';
import Content from './Components/Content';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <AppHeader />
      <Content />
    </div>
  )
}

export default App
