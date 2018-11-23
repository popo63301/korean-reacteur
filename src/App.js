import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.mainList = React.createRef();
    this.koreanTextarea = React.createRef();
    this.translationTextarea = React.createRef();
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

    let finalStringKorean = '';

    for (let i = 0; i < koreanWords.length; i++) {
      finalStringKorean = finalStringKorean + koreanWords[i] + '\n';
    }

    this.koreanTextarea.current.value = finalStringKorean;

    ///
    let finalStringTranslation = '';

    for (let i = 0; i < translations.length; i++) {
      finalStringTranslation = finalStringTranslation + translations[i] + '\n';
    }

    this.translationTextarea.current.value = finalStringTranslation;
  };

  render() {
    return (
      <div>
        <div>
          <textarea rows="30" cols="30" ref={this.mainList} />
          <textarea
            rows="30"
            cols="20"
            style={{ marginLeft: '200px' }}
            ref={this.koreanTextarea}
          />
          <textarea
            rows="30"
            cols="20"
            style={{ marginLeft: '100px' }}
            ref={this.translationTextarea}
          />
        </div>
        <button type="button" onClick={this.divide}>
          DIVIDE
        </button>
      </div>
    );
  }
}

export default App;
