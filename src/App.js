import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: '',
    };
  }
  handleClearAll = () => {
    this.setState({
      output: '',
    })
  }
  handleButton = (event) => {
    // check last index to stop duplicated operators
  
  }
  handleEqual = () => {
    this.setState({
      //eslint-disable-next-line 
      output: eval(this.state.output)
  })
  }
  
  render() {
    const displayOutput = this.state.output;
    return (
      <div className="App">
        <h3>Javascript Calculator</h3>
        <h5>**Created by ymoua17**</h5>
        <div id='display'>
          {displayOutput}
        </div>
        <div className="inputs">
          <button id="clear" className="btn btn-danger" onClick={this.handleClearAll}>A/C</button>
          <button id="add" className="btn btn-light" value="" onClick={this.handleButton}>+/-</button>
          <button id="percent" className="btn btn-light" value="" onClick={this.handleButton}>%</button>
          <button id="divide" className="btn btn-light" value="/" onClick={this.handleButton}>/</button>
          <br/>
          <button id="nine" className="btn btn-secondary" value="7" onClick={this.handleButton}>7</button>
          <button id="eight" className="btn btn-secondary" value="8" onClick={this.handleButton}>8</button>
          <button id="seven" className="btn btn-secondary" value="9" onClick={this.handleButton}>9</button>
          <button id="multiply" className="btn btn-light" value="*" onClick={this.handleButton}>*</button>
          <br/>
          <button id="six" className="btn btn-secondary" value="4" onClick={this.handleButton}>4</button>
          <button id="five" className="btn btn-secondary" value="5" onClick={this.handleButton}>5</button>
          <button id="four" className="btn btn-secondary" value="6" onClick={this.handleButton}>6</button>
          <button id="subtract" className="btn btn-light" value="-" onClick={this.handleButton}>-</button>
          <br/>
          <button id="three" className="btn btn-secondary" value="1" onClick={this.handleButton}>1</button>
          <button id="two" className="btn btn-secondary" value="2" onClick={this.handleButton}>2</button>
          <button id="one" className="btn btn-secondary" value="3" onClick={this.handleButton}>3</button>
          <button id="add" className="btn btn-light" value="+" onClick={this.handleButton}>+</button>
          <br/>
          <button id="zero" className="btn btn-secondary lg-btn" value="0" onClick={this.handleButton}>0</button>
          <button id="decimal" className="btn btn-secondary" value="." onClick={this.handleButton}>.</button>
          <button id="equal" className="btn btn-success" onClick={this.handleEqual}>=</button>
        </div>
      </div>
    );
  }
}

export default App;
