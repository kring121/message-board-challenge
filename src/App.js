import React, { Fragment, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    axios.get('/posts')
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div>WELCOME</div>
  )
};

export default App;
