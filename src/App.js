import './App.scss';
import Header from './components/header/header';
import MapComponent from './components/map/map';
import React from 'react';
import { IPInfoProvider } from './contexts/ip-info';
import { Helmet } from 'react-helmet';

function App() {

  return (
    <>
      <IPInfoProvider>
        {/* Head element in index.html */}
        <Helmet>
          <link rel="preconnect" href="https://a.tile.openstreetmap.org" crossorigin />
          <link rel="dns-prefetch" href="https://a.tile.openstreetmap.org" />
        </Helmet>
        <Header/>
        <MapComponent/>
      </IPInfoProvider>
    </>
  );
}

export default App;
