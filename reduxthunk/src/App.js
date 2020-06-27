import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import * as actionCreator from './store/actions/actions'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          Your age:<span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp} >Age Up</button>
        <button onClick={this.props.onAgeDown} >Age Down</button>
        {this.props.loading && <img src={logo} className="App-logo"/>}
      </div>
    );
  }

}


const mapStateToProps=state=>{
  console.log('state',state)
  return{
    age:state.age,
    loading:state.loading
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    onAgeUp:()=>dispatch(actionCreator.ageUp(1)),
    onAgeDown:()=>dispatch(actionCreator.ageDown(1))
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(App);
