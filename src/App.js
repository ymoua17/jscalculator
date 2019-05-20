import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '0',
      operators: ["+", "-", "*", "/"],
      decimal: "."
    };
  }
  //erase all data on the output display
  handleClearAll = () => {
    this.setState({
      input: '0'
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
    if (this.state.input === "0") {
      this.setState({
        input: num.target.value
      })
    } else {
      this.setState({
        input: this.state.input + num.target.value
      })
    }
  }

  //checks if value from last operator contains a decimal point, if not user may add a decimal
  //fix if only value is an decimal, console log an error
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
  //if last input is an operator, replace it with the an operator if pressed.
  handleOperator = (operator) => {
    if (this.state.input === "" || this.state.input[this.state.input.length-1] === this.state.decimal) {
      console.log("enter a number")
    } else if (this.state.operators.includes(this.state.input[this.state.input.length - 1])) {
      //remove last index value
      //add new operator to the of the input
      this.setState({
        input: this.state.input.substr(0, this.state.input.length -1) + operator.target.value,
      })
    } else {
      this.setState({
        input: this.state.input + operator.target.value,
      })
    }
  }
  //check if the last value is not an operator before evaluating
  // if value is less than 100, only show 4 decimal spaces
  // if value is less than 10000, only show 2 decimal spaces else show no decimal

  handleEqual = () => {
    if (!this.state.operators.includes(this.state.input[this.state.input.length - 1]) && this.state.input[this.state.input.length-1] !== this.state.decimal) {
      // eslint-disable-next-line 
      let result = eval(this.state.input)
      if (result <= 100) {
        result = Math.round(result * 10000)/10000;
        this.setState({
          input: result.toString(),
        })
      } else if (result <= 10000) {
        result = Math.round(result * 100)/100;
        this.setState({
          input: result.toString(),
        })
      } else {
        result = Math.round(result);
        this.setState({
          input: result.toString(),
        })
      }   
    } else {
      console.log("enter a valid expression")
    }
  }
  
  
  render() {
    // changes font size dependent on output length
    const displayOutput = () => {
      if (this.state.input.length < 12) {
        return <p className="output-display">{this.state.input}</p>;
      } else {
        return <p className="output-display small-display">{this.state.input}</p>
      }
    }
    return (
      <div className="App">
        <h3>Javascript Calculator</h3>
        <a href="https://github.com/ymoua17/jscalculator" target="_blank"  rel="noopener noreferrer" className="link">**Created by ymoua17**</a>
        <div id='display'>
          {displayOutput()}
        </div>
        <div className="inputs">
          <button id="clear" className="btn btn-danger lg-btn" onClick={this.handleClearAll}>AC</button>
          <button id="delete" className="btn btn-light" onClick={this.handleDeleteButton}>Del</button>
          <button id="divide" className="btn btn-light operator" value="/" onClick={this.handleOperator}>/</button>
          <br/>
          <button id="seven" className="btn btn-secondary" value="7" onClick={this.handleNumber}>7</button>
          <button id="eight" className="btn btn-secondary" value="8" onClick={this.handleNumber}>8</button>
          <button id="nine" className="btn btn-secondary" value="9" onClick={this.handleNumber}>9</button>
          <button id="multiply" className="btn btn-light" value="*" onClick={this.handleOperator}>*</button>
          <br/>
          <button id="four" className="btn btn-secondary" value="4" onClick={this.handleNumber}>4</button>
          <button id="five" className="btn btn-secondary" value="5" onClick={this.handleNumber}>5</button>
          <button id="six" className="btn btn-secondary" value="6" onClick={this.handleNumber}>6</button>
          <button id="subtract" className="btn btn-light" value="-" onClick={this.handleOperator}>-</button>
          <br/>
          <button id="one" className="btn btn-secondary" value="1" onClick={this.handleNumber}>1</button>
          <button id="two" className="btn btn-secondary" value="2" onClick={this.handleNumber}>2</button>
          <button id="three" className="btn btn-secondary" value="3" onClick={this.handleNumber}>3</button>
          <button id="add" className="btn btn-light" value="+" onClick={this.handleOperator}>+</button>
          <br/>
          <button id="zero" className="btn btn-secondary lg-btn" value="0" onClick={this.handleNumber}>0</button>
          <button id="decimal" className="btn btn-secondary" value="." onClick={this.handleDecimal}>.</button>
          <button id="equals" className="btn btn-success" onClick={this.handleEqual}>=</button>
        </div>
      </div>
    );
  }
}


export default App;
