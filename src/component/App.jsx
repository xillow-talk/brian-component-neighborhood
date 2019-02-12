import React from 'react';
import styled from 'styled-components';
import { Heading, Content} from '../style.js';

class App extends React.Component {
  constructor() {
    super()
    this.state = {};
  }

  toggleOpen() {
    this.setState({ open: !this.state.open})
  }

  render(){
  return(
    <div>
    <Heading onClick={this.toggleOpen.bind(this)}>Neighborhood</Heading>
    <Content open={this.state.open}>
      <div className="collapsible-content">
        <div>zestimate</div>
        <div>paragraph</div>
        <div>google maps</div>
        <div>photo carasel</div>
      </div>
    </Content>
    
    </div>
    )
  }
}

export default App;

