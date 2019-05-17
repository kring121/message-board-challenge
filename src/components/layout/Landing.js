import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className='landing text-center'>
    <div className='dark-overlay'/>
    <div className='landing-inner'>
      <h1 className='medium mb-2'>Welcome to MessageBoard</h1>
      <p className='lead mb-2'>Join an international community of people posting their thoughts</p>
      <button className='btn btn-primary'>Login</button>
    </div>
  </div>
)

export default Landing
