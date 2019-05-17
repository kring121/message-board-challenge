import React, { Fragment, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// imported components
import Messages from './components/messages/Messages';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {

  return (
    <Provider store={store}>
      <Navbar/>
      <Landing/>
    </Provider>
  )
};

export default App;
