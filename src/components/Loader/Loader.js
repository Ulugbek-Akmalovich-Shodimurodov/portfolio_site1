import React from 'react';
import ReactLoading from 'react-loading';
import { ClimbingBoxLoader } from 'react-spinners';
import './loader.css'

function Loader() {
  return (
    <div className='loader'>
      <ClimbingBoxLoader />
    </div>
  );
}

export default Loader;
