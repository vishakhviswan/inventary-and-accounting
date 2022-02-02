import React from 'react'
import { useState } from 'react';
import { Typeahead } from "react-bootstrap-typeahead";
import './TypeAhead.css'


function TypeAhead() {
const [singleSelections, setSingleSelections] = useState([]);
const options = [
  "alahabad",
  "bsada",
  "Apple",
  "Banana",
  "Orange",
  "Apple",
  "Banana",
  "Orange",
];

    return (
        <div className='typeAhead_parentDiv'>
            
        <Typeahead
          id="basic-typeahead-single"
          labelKey="name"
          onChange={setSingleSelections}
          options={options}
          placeholder="Items ..."
          selected={singleSelections}
        />
   
      </div>
    );
}

export default TypeAhead;
