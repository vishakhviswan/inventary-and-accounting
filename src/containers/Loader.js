import React from 'react';
import { Spinner } from 'react-bootstrap';

import "./Containers.css"
function Loader() {
    return (
        <div className='loaderDiv'>
        <Spinner className='spinnerIcon' animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>
    );
}

export default Loader;
