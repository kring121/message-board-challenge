import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
      <BrowserRouter>
        <Fragment>
          <Navbar/>
          <Route exact path='/' component={Landing}/>
          <Switch>
            <Route exact path='/messages' component={Messages}/>
          </Switch>
        </Fragment>
      </BrowserRouter>
    </Provider>
  )
};

export default App;
