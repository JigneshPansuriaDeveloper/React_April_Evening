import React, { Component } from 'react';
import Banner from './Banner'
import ArtistList from './ArtistList'

const API_URL=" http://localhost:8900/artists";

class Home extends Component{
    constructor(){
        super();
        this.state={
            artists:''
        }
    }
    componentDidMount() {
        fetch(API_URL)
          .then(response => response.json())
          .then(data => this.setState({ artists: data }));
      }
    render(){
        console.log('render',this.state.artists)
        return(
            <div>
                <Banner />
                <ArtistList artistData={this.state.artists} />
            </div>
        )
    }
}

export default Home;