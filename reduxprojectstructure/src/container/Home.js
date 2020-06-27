import React, { Component } from 'react';
import {moviesList} from '../actions'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import DisplayList from '../component/DisplayList'

class Home extends Component{


    componentDidMount(){
        this.props.moviesList();
    }
    render(){
        return(
            <div>
                <h1>Redux</h1>
                <p>Test redux app</p>
                <DisplayList datalist={this.props.myData}/>
            </div>
        )
    }
}


function mapStateToProps(state){
    console.log('>>>>',state)
    return{
        myData:state.films
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({moviesList},dispatch)

}

export default connect(mapStateToProps,mapDispatchToProps)(Home);