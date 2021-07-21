import React from 'react';
import Home from 'components/Home'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.ssrData = this.props.data
  }

  clickDemo() {
    console.log("App click")
  }

  render() {
    return (
      <div>
        <div>children component: </div>
        <Home />
        <div>App ssr data: </div>
        <div onClick={this.clickDemo}>{this.ssrData.name}-{this.ssrData.sex}</div>
      </div>
    )
  }
}

export default App;