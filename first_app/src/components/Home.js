import React, { Component } from 'react';
import Header from './Header';
import NewsDisplay from './NewsDisplay';
import Footer from './Footer';
import JSON from '../db.json';


class Home extends Component{
    constructor(){
        super();
        this.state={
            news:JSON,
            filter:JSON
        }
    }
    filterNews=(userInput)=>{
        const output=this.state.news.filter((data)=>{
            return data.title.indexOf(userInput) >-1 || data.feed.indexOf(userInput) >-1
        })
        this.setState({filter:output})
    }
    render(){
        return(
            <div>
                <Header year="2020" userText={(headerData)=>this.filterNews(headerData)} />
                <NewsDisplay datalist={this.state.filter} />
                <Footer />

            </div>
        )
    }
} 

export default Home;