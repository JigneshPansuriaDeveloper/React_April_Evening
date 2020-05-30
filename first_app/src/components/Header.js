import React, { Component } from 'react';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"React state App",
            keyword:"User text here",
            year:this.props.year
        }
    }
    inputChange=(e)=>{
        this.setState({keyword:e.target.value})
        this.props.userText(e.target.value)

    }
    render(){
        return(
            <header>
                <div className="logo">
                {this.state.title}-{this.state.year}
                <center>
                    <input onChange={this.inputChange}/>
                    <p>{this.state.keyword}</p>
                </center>
                </div>
            </header>
        )
    }
}

export default Header;