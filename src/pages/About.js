import React from 'react';
import {Link} from 'react-router-dom';

const About = () => (
  <>
    <h1 className="mb-4">About</h1>
    <p>Version 1.0.0</p>
    <Link to='/'>Go Back</Link>
  </>
);

export default About;
