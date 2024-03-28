import React, { createContext, useState } from 'react';
import { DATA } from '../mock-data';

export const IPInfoContext = createContext();

export const IPInfoProvider = ({ children }) => {
    const [ipData, setIpData] = useState(DATA);
  
    const updateIpData = (newIpData) => {
      setIpData(newIpData);
    };
  
    return (
      <IPInfoContext.Provider value={{ ipData, updateIpData }}>
        {children}
      </IPInfoContext.Provider>
    );
  };