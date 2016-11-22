import React from 'react';
import { SearchBar } from './Navigation';

const MobileApp = ({ children }) => (
  <div className="mobile">
    <SearchBar />
    {children}
  </div>
);

export default MobileApp;
