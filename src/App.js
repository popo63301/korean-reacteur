import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.mainList = React.createRef();
  }

  divide = () => {
    let koreanWords = [];
    let translations = [];

    let mainList = this.mainList.current.value;
    mainList = mainList.split('\n');

    for (let i = 0; i < mainList.length; i++) {
      let tab = mainList[i].split(' = ');
      koreanWords.push(tab[0]);
      translations.push(tab[1]);
    }

    console.log(translations);
  };

  render() {
    return (
      <div>
        <div>
          <textarea rows="30" cols="30" ref={this.mainList} />
          <textarea rows="30" cols="20" style={{ marginLeft: '200px' }} />
          <textarea rows="30" cols="20" style={{ marginLeft: '100px' }} />
        </div>
        <button type="button" onClick={this.divide}>
          DIVIDE
        </button>
      </div>
    );
  }
}

export default App;
