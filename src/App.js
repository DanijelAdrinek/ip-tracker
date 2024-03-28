import './App.scss';
import Header from './components/header/header';
import MapComponent from './components/map/map';
import React from 'react';
import { IPInfoProvider } from './contexts/ip-info';

function App() {

  return (
    <>
      <IPInfoProvider>
        <Header/>
        <MapComponent/>
      </IPInfoProvider>
    </>
  );
}

export default App;
