import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import babyShark from './baby-shark.jpg';
import './App.css';
// import HelloWorld from './components/HelloWorld';
// import Clock from './components/Clock';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Mundo')

  const clickClick = () => {
    setCount(count + 1)
    setName('Wafresilas')
  }

  useEffect(() => {
    document.title = `Acabas de presionar ${count} veces!`
  })

  return (
    <div>
      <h1>Hola {name}</h1>
      <p>
        You clicked {count} times
      </p>
      <button onClick={() => clickClick()}>
        Click Me
      </button>
    </div>
  )
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={babyShark} className="App-logo" alt="logo" />
          <p>
            ^^  babyShark here ^^
          </p>
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=XqZsoesa55w"
            // target="_blank"
            rel="noopener noreferrer"
          >
            Shark video
          </a>
          
          <Counter />
        </header>
      </div>
    );
  }
}

export default App;
