import React from 'react';
import Home from './Home.jsx';
import { Slides } from '../style';


const Homes = ({property1, property2, zip}) => (
  <div>
    <Slides className="singleContainer1">
      <Home property={property1} zip={zip} />
      <Home property={property2} zip={zip} />
    </Slides>
  </div>
);

export default Homes;
