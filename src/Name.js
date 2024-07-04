import React from 'react';
import './Name.css'
function Name({ firstName, lastName }) {
  return <h2>{`${firstName} ${lastName}`}</h2>;
}

export default Name;
