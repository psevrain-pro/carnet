import React from 'react';
import Header from './components/Header.js';
import Detail from './components/Detail.js';
import Footer from './components/Footer.js';
import './App.css';
import 'bulma';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faStar, faPlus, faMinus, faCheckCircle, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far, faCheck, faStar, faPlus, faMinus, faCheckCircle, faArrowAltCircleLeft );

function App() {
  return (
    <div className="App">
      <Header />
      <Detail />
      <Footer /> 
    </div>
  );
}

export default App;
