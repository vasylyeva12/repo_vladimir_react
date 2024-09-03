import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  const navbarArray = [
    {
      id: "1",
      label: "Link 1"
    },
    {
      id: "2",
      label: "Link 2"
    },
    {
      id: "3",
      label: "Link 3"
    },
    {
      id: "4",
      label: "Link 4"
    }
  ];


  const handleClick = (name) => {
    alert(`Hello, ${name}`);
  }

  return (
    <>
      <Navbar data={navbarArray}/>
    
      <main>
        <h1><button onClick={() => handleClick("John")}>Show Message</button></h1>
      </main>

      <footer>
        <p>© 2024 GitHub, Inc.</p>
      </footer>
    </>
  )
}

export default App