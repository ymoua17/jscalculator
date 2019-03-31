import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : 0,
    };
  }
  render() {
    return (
      <div className="App">
        <h3>Javascript Calculator</h3>
        <h5>**Created by ymoua17**</h5>
        <div id='display'>
          {this.state.value}
        </div>
        <div className="inputs">
          <button id="clear" className="btn btn-danger">A/C</button>
          <button id="add" className="btn btn-light">+/-</button>
          <button id="percent" className="btn btn-light">%</button>
          <button id="divide" className="btn btn-light">/</button>
          <br/>
          <button id="nine" className="btn btn-secondary">9</button>
          <button id="eight" className="btn btn-secondary">8</button>
          <button id="seven" className="btn btn-secondary">7</button>
          <button id="multiply" className="btn btn-light">*</button>
          <br/>
          <button id="six" className="btn btn-secondary">6</button>
          <button id="five" className="btn btn-secondary">5</button>
          <button id="four" className="btn btn-secondary">4</button>
          <button id="subtract" className="btn btn-light">-</button>
          <br/>
          <button id="three" className="btn btn-secondary">3</button>
          <button id="two" className="btn btn-secondary">2</button>
          <button id="one" className="btn btn-secondary">1</button>
          <button id="add" className="btn btn-light">+</button>
          <br/>
          <button id="zero" className="btn btn-secondary lg-btn">0</button>
          <button id="decimal" className="btn btn-secondary">.</button>
          <button id="equal" className="btn btn-success">=</button>
        </div>
        
      </div>
    );
  }
}

export default App;
