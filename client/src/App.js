import React, { Fragment } from 'react';
import './App.css';
import TopBar from './components/topbar/TopBar';
import Numbers from './components/numberForm/NumbersForm';

function App() {
  return (
    <Fragment>
      <TopBar />
      <Numbers />
    </Fragment>
  );
}

export default App;
