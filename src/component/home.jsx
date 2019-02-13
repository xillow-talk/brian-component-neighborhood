import React from 'react';
import { Img, Photos, Heart, Status, Market, Price, BB, Addy} from '../style'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  newHouse() {
    console.log('yay')
    console.log(this.props.property)
  }
  render(){
    return (
      <span className="photo1"> 
       <Img onClick={this.newHouse.bind(this)} src="https://s3-us-west-1.amazonaws.com/xillowpropertyphotos/property3.jpg">
       </Img>
         <Photos>{this.props.property.pic_count}Photos</Photos>
         <Heart>Heart</Heart>
          <h4>
            <Status>status</Status>
            <Market>{this.props.property.house_status === 0 ? "SOLD" : "OFF MARKET"}</Market>
          </h4>
          <p>
            <span>
              <Price>${this.props.property.price}</Price>
              <BB>{this.props.property.bed_count} bds {this.props.property.bath_count} ba 1,000 sqft</BB>
            </span>
            <Addy>{this.props.property.address1}, {this.props.property.city}, CA {this.props.zip.code}</Addy>
          </p>
     </span>
      
    )
  }
}

export default Home;