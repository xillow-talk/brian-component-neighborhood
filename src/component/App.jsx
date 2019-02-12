import React from 'react';
import Zestimate from './Zestimate.jsx';
import Paragraph from './Paragraph.jsx';
import Google_Maps from './Google_Maps.jsx';
import Photo_Carasel from './Photo_Carasel.jsx';
import { Heading, Content } from '../style.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
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
            <Zestimate />
            <Paragraph />
            <Google_Maps />
            <Photo_Carasel />
          </div>
        </Content>
      </div>
    );
  }
}

export default App;
