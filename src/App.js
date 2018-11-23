import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <textarea rows="30" cols="30" />
          <textarea rows="30" cols="20" style={{ marginLeft: '200px' }} />
          <textarea rows="30" cols="20" style={{ marginLeft: '100px' }} />
        </div>
        <button type="button">DIVIDE</button>
      </div>
    );
  }
}

export default App;
