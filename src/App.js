import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'
import BtnM from './components/ButtonMoins';
import BtnR from './components/ButtonReset';
import BtnP from './components/ButtonPlus';
import Result from './components/Result';




class App extends Component {
  state = {counter :0}
  incrementCounter = ()=>{
   this.setState((prevState)=>({
   
   counter : prevState.counter + 1
   
   }))
   
  }
  
  decrementCounter = ()=>{
  this.setState((prevState)=>({
  counter : prevState.counter - 1 
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
        <BtnP onClickFunction ={this.incrementCounter} />
        <BtnM onClickFunctionM ={this.decrementCounter} />
        <BtnR onClickFunctionR ={this.resetCounter} />
        
        
        <Result counter = {this.state.counter} />
        
      </div>
        </p>
      </div>
    );
  }
}

export default App;
