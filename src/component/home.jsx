import React from 'react';

class Home extends React.Component {
  constructor() {
    super()
  }
  render(){
    return (
      <div>
       <img src="https://s3-us-west-1.amazonaws.com/xillowpropertyphotos/property2.jpg"></img>
       <img src="https://s3-us-west-1.amazonaws.com/xillowpropertyphotos/property3.jpg"></img>
      </div>
    )
  }
}

export default Home;