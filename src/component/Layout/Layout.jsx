import React, { useState } from 'react';
// import './App.css';
import Menu from '../Menu';
import Details from '../Details';
import Buttons from '../Buttons';

function Layout() {

  return (
    <div className="Layout">
      <Menu />
      <Details />
      <Buttons />
    </div>
  );
}

export default Layout;
