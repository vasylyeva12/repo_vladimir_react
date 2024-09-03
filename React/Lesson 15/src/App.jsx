import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import "./App.scss";
import { AuthProvider } from './AuthContext';
import { ThemeProvider } from './ThemeContext';

const App = () => {
  return (
    <>
    <ThemeProvider>
      <AuthProvider>
        <Navbar />
        <Home />
      </AuthProvider>
    </ThemeProvider>
    </>
  )
}

export default App