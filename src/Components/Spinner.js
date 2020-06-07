import React, { Fragment } from 'react';
import spinner from '../img/muisc.gif';

export default () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    height: '100vh'
    }}>
    <img
      src={spinner}
      style={{ 
        width: '300px', 
        margin: 'auto', 
        display: 'block',
      }}
      alt='Loading...'
    />
  </div>
);