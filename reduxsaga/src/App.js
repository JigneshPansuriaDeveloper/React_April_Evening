import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
class App extends Component{ 
  render(){
    return (
      <div className="App">
        <header className="App-header">
          Your age:{this.props.age}

          <button onClick={this.props.onAgeUp} >AgeUp</button>
          {/* <button onClick={this.props.onAgeDown} >AgeUp</button> */}
        </header>
      </div>
    );

  }
  
}

const mapStateToProps=state=>{
  return{
    age:state.age
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    onAgeUp:()=>dispatch({type:"AGE_UP",value:1}),
    onAgeDown:()=>dispatch({type:"AGE_DOWN",value:1})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
