import React from 'react';
import Home from  './Home.jsx'
import { Slides } from '../style'



class Homes extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
      <Slides className="singleContainer1">
        <Home property={this.props.property1} zip={this.props.zip}/>
        <Home property={this.props.property2} zip={this.props.zip}/>
      </Slides>
      </div>
    )
  }
}

export default Homes;