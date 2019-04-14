import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      operators: ["+", "-", "*", "/"],
      decimal: "."
    };
  }
  //Tasks
  //when an operator is pressed, resets the display number back to blank
  
  //erase all data on the output display
  handleClearAll = () => {
    this.setState({
      input: ''
    })
  }
  //button to delete the last value
  handleDeleteButton = () => {
    this.setState({
      input: this.state.input.substring(0, this.state.input.length -1),
    })
  }

  //button to enter a numeric value
  handleNumber = (num) => {
    this.setState({
      input: this.state.input + num.target.value
    })
  }

  //checks if value from last operator contains a decimal point, if not user may add a decimal
  handleDecimal = (decimal) => {
    let indexOfOperator = -1;
    for (let i=0; i < this.state.operators.length; i++) {
      if (this.state.input.lastIndexOf(this.state.operators[i]) !== -1 || this.state.input.lastIndexOf(this.state.operators[i]) >= indexOfOperator) {
        indexOfOperator = this.state.input.lastIndexOf(this.state.operators[i]);
      } else {
        console.log("cannot enter this value")
      }
    }
    if (indexOfOperator === -1 && !this.state.input.includes(this.state.decimal)) {
      this.setState({
        input: this.state.input + decimal.target.value
      })
    } else if (indexOfOperator !== -1) {
      if (!this.state.input.substring(indexOfOperator+1).includes(this.state.decimal)) {
        this.setState({
          input: this.state.input + decimal.target.value
        })
      } else {
        console.log("cannot enter this value")
      } 
    } else {
      console.log("cannot enter this value")
    }
  }

  //check if input has a value first, if yes then add an operator
  handleOperator = (operator) => {
    if (this.state.input === "" || this.state.operators.includes(this.state.input[this.state.input.length - 1])) {
      console.log("enter a number")
    } else {
      this.setState({
        input: this.state.input + operator.target.value
      })
    }
  }
  //check if the last value is not an operator before evaluating
  // if value is larger than 10, only show 3 decimal spaces
  // if value is larger than 1000, only show 2 decimal spaces
  // if value is larger than 100000, only show 1 decimal spaces
  // if value is larger than 10000000, only show 0 decimal spaces

  handleEqual = () => {
    if (!this.state.operators.includes(this.state.input[this.state.input.length - 1])) {
      // eslint-disable-next-line 
      const result = Math.round(eval(this.state.input)*100000)/100000
      this.setState({
        input: result.toString(),
      })
    } else {
      console.log("enter a valid expression")
    }
  }
  
  
  render() {
    // changes font size dependent on output length
    const displayOutput = () => {
      if (this.state.input.length < 10) {
        return <p className="output-display">{this.state.input}</p>;
      } else {
        return <p className="output-display small-display">{this.state.input}</p>
      }
    }
    return (
      <div className="App">
        <h3>Javascript Calculator</h3>
        <h5>**Created by ymoua17**</h5>
        <div id='display'>
          {displayOutput()}
        </div>
        <div className="inputs">
          <button id="clearAll" className="btn btn-danger lg-btn" onClick={this.handleClearAll}>AC</button>
          <button id="delete" className="btn btn-light" onClick={this.handleDeleteButton}>Del</button>
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
          <button id="decimal" className="btn btn-secondary" value="." onClick={this.handleDecimal}>.</button>
          <button id="equal" className="btn btn-success" onClick={this.handleEqual}>=</button>
        </div>
      </div>
    );
  }
}

export default App;
