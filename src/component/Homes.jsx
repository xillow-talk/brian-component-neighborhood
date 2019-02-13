import React from 'react';
import Home from  './Home.jsx'
import { PhotoCard } from '../style'



class Homes extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
      <PhotoCard className="singleContainer1">
        <Home property={this.props.property} zip={this.props.zip}/>
      </PhotoCard>
      <PhotoCard className="singleContainer2">
        <Home property={this.props.property} zip={this.props.zip}/>
      </PhotoCard>
      </div>
    )
  }
}

export default Homes;