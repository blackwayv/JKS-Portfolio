import React from 'react';
import reactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(obj) {
    this.setState(obj);
  }

  render() {
    return (
      <div id='overview'>
        <h1 className='header'>Very advanced website below</h1>
      </div>
    );
  };
}

reactDOM.render(<App />, document.getElementById('app'));