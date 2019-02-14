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
      <h4 style={{fontSize:'13px', fontWeight: '700', textTransform:'uppercase', color: '#444'}}>Nearby Homes</h4>
        <Container className="photocontainer">
          <span className="backbutton">
          <i className='fas' style={{fontSize:'40px', color:'#444',margin:'100px 0px 0px 0px'}}>&#xf104;</i>
          </span>
            <Homes property={this.props.property} zip={this.props.zip}/>
          <span className="forwardbutton">
          <i style='font-size:24px' className='fas'style={{fontSize:'40px', color:'#444',margin:'100px 0px 0px 0px'}}>&#xf105;</i>
          </span>
        </Container>
    </div>
    )
  }
}

export default PhotoCarasel;
