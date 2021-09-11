import React, { useState } from 'react';


import Main from './components/Main.jsx'
import LeftMenu from './components/LeftMenu.jsx'
import GlobalStyle from "./styles";
import Content from "./components/Content.jsx";

function App() {

  const [showMenu, showLeftMenu] = useState('true');

  return (
    <>
      {showMenu ? <LeftMenu /> : null}
      <button onClick={() => showLeftMenu(!showMenu)}>Open</button>
      <Main />
      <GlobalStyle />
    </>
  );
}

export default App;
