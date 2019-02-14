import React from 'react';
import Homes from './Homes.jsx';
import { Container } from '../style';
import axios from 'axios';


class PhotoCarasel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      property: [],
      photo1: null,
      photo2: null,
      counter: 1
    }
    this.backButton = this.backButton.bind(this);
    this.forwardButton = this.forwardButton.bind(this);
  }

  fetchProperties(){
    axios.get('/property')
      .then(res => {
        this.setState({property: res.data})
        this.setState({photo1: res.data[0]})
        console.log(this.state.photo1)
        this.setState({photo2: res.data[1]})
        console.log(this.state.photo2)
      })
      .catch(err => {
        console.log(err)
      })
  }
  componentDidMount(){
    this.fetchProperties()
  }

  backButton(){
    if(this.state.counter > 1){
      this.state.counter -= 2
      this.setState({photo1: this.state.property[this.state.counter - 1]})
      this.setState({photo2: this.state.property[this.state.counter]})
    } else if (this.state.counter === 1) {
      
    }
 
  };
  forwardButton(){
    if(this.state.counter !== this.state.property.length-1){
      this.state.counter += 2
      this.setState({photo1: this.state.property[this.state.counter - 1]})
      this.setState({photo2: this.state.property[this.state.counter]})
    }
  }

  render(){
    return (
    <div className="photos">
      <h4 style={{fontSize:'13px', fontWeight: '700', textTransform:'uppercase', color: '#444'}}>Nearby Homes</h4>
        <Container className="photocontainer">
          <span onClick={this.backButton} className="backbutton">
            <i className='fas' style={{fontSize:'40px', color:'#444',margin:'100px 0px 0px 0px'}}>&#xf104;</i>
          </span>
            <Homes property={this.props.property} zip={this.props.zip}/>
          <span onClick={this.forwardButton} className="forwardbutton">
            <i style='font-size:24px' className='fas'style={{fontSize:'40px', color:'#444',margin:'100px 0px 0px 0px'}}>&#xf105;</i>
          </span>
        </Container>
    </div>
    )
  }
}

export default PhotoCarasel;
