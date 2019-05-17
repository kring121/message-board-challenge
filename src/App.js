import React, { Fragment, useEffect } from 'react';
import axios from 'axios';

// imported components
import Messages from './components/Messages';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {

  return (
    <Provider store={store}>
      <div>WELCOME</div>
      <Messages/>
    </Provider>
  )
};

export default App;
