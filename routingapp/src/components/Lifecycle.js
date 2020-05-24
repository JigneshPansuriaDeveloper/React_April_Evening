import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor() {
        super();
        this.state = {
            title: "React App"
        }
        console.log('>>> inside constructor')

    }
    componentWillMount() {
        console.log('will mount');
    }
    componentDidMount() {
        console.log('did mount')
    }
    componentWillUpdate() {
        console.log('will update')
    }

    componentDidUpdate() {
        console.log('did update')
    }

shouldComponentUpdate(nextProps,nextState)
{
    console.log('should component update called')
    if(nextState.title == this.state.title){
        console.log('both are same state')
        return false
    }else{
        console.log('both state are not same')
        return true;
    }
}
componentWillUnmount(){
    alert('Do you want to leave')
}

    render() {
        console.log('>>> rendering')
        return (
            <div>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success" onClick={() => { this.setState({ title: 'React App' }) }}>Click me

                </div>
            </div>
        )
    }
}





export default Lifecycle;