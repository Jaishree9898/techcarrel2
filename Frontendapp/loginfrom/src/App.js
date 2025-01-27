import React from 'react';
import Header from './Component/Header';
import logo from './Component/tc-logo.png'
import Login from './Component/Login';
import Footer from './Component/Footer';




function App() {
  return (
    <>
      <Header logo={logo} />
      <Login />
      <Footer />
    </>
  );
}

export default App;
