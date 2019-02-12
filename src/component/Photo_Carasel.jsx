import React from 'react';
import Home from './Home.jsx'


class Photo_Carasel extends React.Component {
  constructor() {
    super()
  }
  render(){
    return (
    <div>
      <h4>Nearby Homes</h4>
        <div className="photocontainer">
          <div className="backbutton"></div>
            <Home />
          <div className="forwardbutton"></div>
        </div>
    </div>
    )
  }
}

export default Photo_Carasel;
