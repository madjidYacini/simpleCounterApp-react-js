import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'
import BtnM from './components/ButtonMoins';
import BtnR from './components/ButtonReset';
import BtnP from './components/ButtonPlus';
import Result from './components/Result';




class App extends Component {
  state = {counter :0}
  incrementCounter = (incrementValue)=>{
   this.setState((prevState)=>({
   
   counter : prevState.counter + incrementValue
   
   }))
   
  }
  
  decrementCounter = (decrementValue)=>{
  this.setState((prevState)=>({
  counter : prevState.counter - decrementValue
  }))
  }
  resetCounter = ()=>{
  this.setState((prevState)=>({
  counter : 0
  }))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">simple Counter App with react</h1>
        </header>
        <p className="App-intro">
        <div>
        <BtnP incrementValue = {1} onClickFunction ={this.incrementCounter} />
        <BtnM decrementValue ={1} onClickFunctionM ={this.decrementCounter} />
        <BtnP incrementValue = {5} onClickFunction ={this.incrementCounter} />
        <BtnM decrementValue ={5} onClickFunctionM ={this.decrementCounter} />
        
        <BtnP incrementValue = {10} onClickFunction ={this.incrementCounter} />
        <BtnM decrementValue ={10} onClickFunctionM ={this.decrementCounter} />
        
        <BtnR onClickFunctionR ={this.resetCounter} />
        
        
        
        
        <Result counter = {this.state.counter} />
        
      </div>
        </p>
      </div>
    );
  }
}

export default App;
