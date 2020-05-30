import React, { Component } from 'react';
import './Header.css'

class Header extends Component{
    constructor(){
        super();
        this.state={
            title:"React state app",
            keyword:'User Text here'
        }
    }
    inputChange=(e)=>{
        this.setState({keyword:e.target.value})
        this.props.userText(e.target.value)
    }
    render(){
        return(
        <header>
            <div className="logo">{this.state.title}</div>
            <center>
                <input type="text" onChange={this.inputChange} />
                <p>{this.state.keyword}</p>
            </center>
        </header>

        )
    }
}

export default Header;