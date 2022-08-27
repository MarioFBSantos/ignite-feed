import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Card } from './components/Card/Card';
import { Header } from './components/Header/Header';
import './global.css';

export function App() {

  return (
    <div className="App">
      <Header></Header>
      <Card></Card>
    </div>
  )
}

