import React from 'react';
import Homes from './Homes.jsx'
import { Container } from '../style'


class PhotoCarasel extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
    <div className="photos">
      <h4>Nearby Homes</h4>
        <Container className="photocontainer">
          <span className="backbutton">
            back
          </span>
            <Homes property={this.props.property} zip={this.props.zip}/>
          <span className="forwardbutton">
            forward
          </span>
        </Container>
    </div>
    )
  }
}

export default PhotoCarasel;
