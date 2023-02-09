import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import AppHeader from './Components/AppHeader';

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppHeader />
  )
}

export default App
