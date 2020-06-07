import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import {connect} from 'react-redux';
class App extends Component {
  
  render() {
    return (
      <div>
        <div>
        <center>
          <p>{this.props.count}</p>
          <button onClick={this.props.add}>Increment</button>
          <button onClick={this.props.sub}>Decrement</button>
        </center>
        </div>
        <hr/>
        <div>History</div>
        <div>
          <ul>
      {
      this.props.history.map(el=>(
      <li className="historyItem" key={el.id}>{el.count}</li>
      ))
      }
          </ul>
        </div>
      </div>
    )
  }

}


const mapDispatchToProps=dispatch=>{
  return{
    add:()=>dispatch({type:'ADD',value:100}),
    sub:()=>dispatch({type:'SUB',value:100})
  }
}


const mapStateToProps=state=>{
  console.log('state',state.count)
  return{
    count:state.count,
    history:state.history
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);



/*class App extends Component {

  state = {
    count: 100
  }
  add = () => {
    this.setState({ count: this.state.count + 1 })
  }
  sub = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render() {
    return (
      <div>
        <center>
          <p>{this.state.count}</p>
          <button onClick={this.add}>Increment</button>
          <button onClick={this.sub}>Decrement</button>
        </center>
      </div>
    )
  }

}


export default App;
*/