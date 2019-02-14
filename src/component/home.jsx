import React from 'react';
import { Photo, Img, Photos, Heart, Status, Market, Price, BB, Addy} from '../style'


{/* <Img onClick={this.newHouse.bind(this)} src={`https://s3-us-west-1.amazonaws.com/xillowpropertyphotos/property${this.props.property.id}.jpg`}>
       </Img> */}

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
      <Photo className="photo1"> 
       <Img onClick={this.newHouse.bind(this)} src={'property1.jpg'}>
       </Img>
         <Photos>{this.props.property.pic_count}&nbsp;photos</Photos>
         <Heart><i className='material-icons' style={{fontSize:'57px',color:'black',position:'absolute', opacity: '0.5', top:'-3px',right:'-4px'}}>&#xe87d;</i><i className='material-icons' style={{fontSize:'50px',color:'white',position:'relative'}}>&#xe87e;</i></Heart>
          <h4>
            <Status><i className="material-icons" style={{position:'absolute', color:'white', fontSize: '30px'}}>&#xe3a6;</i><i className="material-icons" style={{position:'relative', color:'grey', left: '3px', top:'3px'}}>&#xe3a6;</i></Status>
            <Market>{this.props.property.house_status === 0 ? "SOLD" : "OFF MARKET"}</Market>
          </h4>
          <p>
            <span>
              <Price>${this.props.property.price}</Price>
              <BB>{this.props.property.bed_count} bds {this.props.property.bath_count} ba {this.props.property.sqft} sqft</BB>
            </span>
            <Addy>{this.props.property.address1}, {this.props.property.city}, CA {this.props.zip.code}</Addy>
          </p>
     </Photo>
      
    )
  }
}

export default Home;