import React from 'react';
import axios from 'axios';
import Homes from './Homes.jsx';
import { Container } from '../style';


class PhotoCarasel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property: [],
      photo1: [],
      photo2: [],
      counter: 1,
    };
    this.backButton = this.backButton.bind(this);
    this.forwardButton = this.forwardButton.bind(this);
  }

  componentDidMount() {
    this.fetchProperties();
  }

  fetchProperties() {
    axios.get('/property')
      .then((res) => {
        this.setState({ property: res.data });
        this.setState({ photo1: res.data[0] });
        this.setState({ photo2: res.data[1] });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  backButton() {
    if (this.state.counter > 1) {
      this.state.counter -= 2;
      this.setState({ photo1: this.state.property[this.state.counter - 1] });
      this.setState({ photo2: this.state.property[this.state.counter] });
    } else if (this.state.counter === 1) {
    }
  }

  forwardButton() {
    if (this.state.counter !== this.state.property.length - 1) {
      this.state.counter += 2;
      this.setState({ photo1: this.state.property[this.state.counter - 1] });
      this.setState({ photo2: this.state.property[this.state.counter] });
    }
  }

  render() {
    return (
      <div className="photos">
        <h4 style={{
          fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', color: '#444',
        }}
        >
        Nearby Homes
        </h4>
        <Container className="photocontainer">
          <span onClick={this.backButton} className="backbutton">
            <i
              className="fas"
              style={{
                fontSize: '40px', color: '#444', margin: '100px 0px 0px 0px', cursor: 'pointer',
              }}
            >
              &#xf104;
            </i>
          </span>
          <Homes property1={this.state.photo1} property2={this.state.photo2} zip={this.props.zip} />
          <span onClick={this.forwardButton} className="forwardbutton">
            <i
              className="fas"
              style={{
                fontSize: '40px', color: '#444', margin: '100px 0px 0px 0px', cursor: 'pointer',
              }}
            >
            &#xf105;
            </i>
          </span>
        </Container>
      </div>
    );
  }
}

export default PhotoCarasel;
