import React, { Component } from 'react';
import JSON from './db.json';
import Header from './Header';
import NewsDisplay from './NewsDisplay';
import Footer from './Footer';

class Home extends Component{
    constructor(){
        super();
        this.state={
            news:JSON,
            filter:JSON
        }
    }
    fileterNews=(userInput)=>{
        const output=this.state.news.filter((data)=>
        {
            return data.title.indexOf(userInput) >-1 ||
             data.feed.indexOf(userInput) >-1
        }
        
        )
        this.setState({filter:output})

    }
    render(){
        return(
            <div>
            <Header userText={(headerData)=>this.fileterNews(headerData)}/>
             <NewsDisplay datalist={this.state.filter} />
            <Footer  year="2020" title="Hari Technology"/>
            </div>

        )
    }
}

export default Home;