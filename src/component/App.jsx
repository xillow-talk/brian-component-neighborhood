import React from 'react';
import Zestimate from './Zestimate.jsx';
import Paragraph from './Paragraph.jsx';
import Google_Maps from './GoogleMaps.jsx';
import PhotoCarasel from './PhotoCarasel.jsx';
import faker from 'faker'
import axios from 'axios';
import { Heading, Content } from '../style.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      property: [],
      zip: [],
    };
  }

  fetchProperty(){
    const num = faker.random.number({'min':1, 'max':100})
    axios.get(`/property/${num}`)
      .then(res => {
        this.setState({property: res.data[0]})
      })
      .catch(err => {
        console.log(err)
      })

    }
  fetchZip() {
    axios.get(`/location/${this.state.property.zip_id}`)
    .then(res => {
      this.setState({zip: res.data[0]})
    })
    .catch(err => {
      console.log(err)
    });
  }

  componentDidMount(){
    this.fetchProperty()
  }
  componentDidUpdate(){
    if(this.state.zip.length <1){
      this.fetchZip()
    }
  }
  
  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <Heading onClick={this.toggleOpen.bind(this)}>Neighborhood</Heading>
        <Content open={this.state.open}>
          <div className="collapsible-content">
            <Zestimate property={this.state.property}/>
            <Paragraph zip={this.state.zip}/>
            <Google_Maps />
            <PhotoCarasel property={this.state.property} zip={this.state.zip}/>
          </div>
        </Content>
      </div>
    );
  }
}

export default App;
