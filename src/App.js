import React, { useState, useEffect } from 'react'
import data from './data'

import './App.css';

function App() {
  const [mode, setMode] = useState(false)

  const toggleTheme = () => {
    setMode(!mode)
  }

  return (
    <div className={ mode ? 'light' : 'dark' }>
      <header>
        <div className='headerCenter'>
          <h1>Dark Mode</h1>
          <button className='btn' onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </header>
      <section className='articles'>
        {data.map((item) => {
          return <Article key={item.id} {...item} />
        })}
      </section>
    </div>
  );
}

export default App;
