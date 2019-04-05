import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: '',
      operators: [".", "+", "-", "*", "/"],
      decimal: "."
    };
  }

  //erase all data on the output display
  handleClearAll = () => {
    this.setState({
      output: '',
    })
  }
  //percent button -> needs to fix
  handlePercentButton = () => {
    this.setState({
      
    })
  }
  //button to enter a numeric value
  handleNumber = (num) => {
    this.setState({
      output: this.state.output + num.target.value,
    })
  }
  //check if the first input is not empty and check if last input is an operator or decimal to prevent double entries
  handleOperator = (operator) => {
    if (this.state.output === "" || this.state.operators.includes(this.state.output[this.state.output.length-1])) {
      console.log("enter a number");
    } else {
      this.setState({
        output: this.state.output + operator.target.value,
      })
    }
  }
  //check if the last value is not an operator before evaluating
  handleEqual = () => {
    if (this.state.output === "" || this.state.operators.includes(this.state.output[this.state.output.length-1])) {
      console.log("not a solvable expression");
    } else {
      this.setState({
        //eslint-disable-next-line 
        output: eval(this.state.output).toString(),
      })
    }
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
          <button id="clearAll" className="btn btn-danger lg-btn" onClick={this.handleClearAll}>AC</button>
          <button id="Percent" className="btn btn-light" onClick={this.handlePercentButton}>%</button>
          <button id="divide" className="btn btn-light operator" value="/" onClick={this.handleOperator}>/</button>
          <br/>
          <button id="nine" className="btn btn-secondary" value="7" onClick={this.handleNumber}>7</button>
          <button id="eight" className="btn btn-secondary" value="8" onClick={this.handleNumber}>8</button>
          <button id="seven" className="btn btn-secondary" value="9" onClick={this.handleNumber}>9</button>
          <button id="multiply" className="btn btn-light" value="*" onClick={this.handleOperator}>*</button>
          <br/>
          <button id="six" className="btn btn-secondary" value="4" onClick={this.handleNumber}>4</button>
          <button id="five" className="btn btn-secondary" value="5" onClick={this.handleNumber}>5</button>
          <button id="four" className="btn btn-secondary" value="6" onClick={this.handleNumber}>6</button>
          <button id="subtract" className="btn btn-light" value="-" onClick={this.handleOperator}>-</button>
          <br/>
          <button id="three" className="btn btn-secondary" value="1" onClick={this.handleNumber}>1</button>
          <button id="two" className="btn btn-secondary" value="2" onClick={this.handleNumber}>2</button>
          <button id="one" className="btn btn-secondary" value="3" onClick={this.handleNumber}>3</button>
          <button id="add" className="btn btn-light" value="+" onClick={this.handleOperator}>+</button>
          <br/>
          <button id="zero" className="btn btn-secondary lg-btn" value="0" onClick={this.handleNumber}>0</button>
          <button id="decimal" className="btn btn-secondary" value="." onClick={this.handleOperator}>.</button>
          <button id="equal" className="btn btn-success" onClick={this.handleEqual}>=</button>
        </div>
      </div>
    );
  }
}

export default App;
