import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import ArtistDetails from './ArtistDetails'

const Routing=()=>{
    return(
        <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route exact path="/artist/:id" component={ArtistDetails} />
        </BrowserRouter>
    )
}



export default Routing;