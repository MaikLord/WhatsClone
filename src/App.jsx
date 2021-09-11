import React, { useState } from 'react';
import ReactDOM from 'react-dom';


import Main from './components/Main.jsx'
import LeftMenu from './components/LeftMenu.jsx'
import GlobalStyle from "./styles";
import Content from "./components/Content.jsx";

function App() {

  return (
    <>
      <LeftMenu />
      <Main />
      <GlobalStyle />
    </>
  );
}

export default App;