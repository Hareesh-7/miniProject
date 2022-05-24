import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hii from './components/hii';
import MainNavbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import MenuAppBar from './components/hii';

function App() {
  return (
    <div className="App">
      {/* <Hii name="Hareesh" /> */}
      <MainNavbar />
      <MenuAppBar />
      <Footer />
    </div>
  );
}

export default App;
