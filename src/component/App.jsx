import React from 'react';
import faker from 'faker';
import axios from 'axios';
import Zestimate from './Zestimate.jsx';
import Paragraph from './Paragraph.jsx';
import GoogleMaps from './GoogleMaps.jsx';
import PhotoCarasel from './PhotoCarasel.jsx';
import { Center, Heading, Content } from '../style.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      property: [],
      zip: [],
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  componentDidMount() {
    this.fetchProperty();
  }

  componentDidUpdate() {
    if (this.state.zip.length < 1) {
      this.fetchZip();
    }
  }

  fetchProperty() {
    const num = faker.random.number({ min: 1, max: 100 });
    axios.get(`/property/${num}`)
      .then((res) => {
        this.setState({ property: res.data[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  fetchZip() {
    axios.get(`/location/${this.state.property.zip_id}`)
      .then((res) => {
        this.setState({ zip: res.data[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  }


  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <Center>
        <Heading onClick={this.toggleOpen}>Neighborhood</Heading>
        <Content open={this.state.open}>
          <div className="collapsible-content">
            <Zestimate property={this.state.property} />
            <Paragraph zip={this.state.zip} />
            <GoogleMaps />
            <PhotoCarasel property={this.state.property} zip={this.state.zip} />
          </div>
        </Content>
      </Center>
    );
  }
}

export default App;
