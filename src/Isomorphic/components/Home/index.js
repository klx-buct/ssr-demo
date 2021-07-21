import React from 'react';
import './index.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  test() {
    console.log("Home click");
  }

  render() {
    return (
      <div onClick={this.test} className="content">
        this is home with style color: red
      </div>
    )
  }
}

export default Home;