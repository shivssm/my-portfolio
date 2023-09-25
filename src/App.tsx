import React from 'react';
import './App.scss';
import Main from './components/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
