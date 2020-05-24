import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Post from './Post';
import Lifecycle from './Lifecycle';
const Routing = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <nav classNameName="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">WebSiteName</a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to="/">Home</Link></li>
                                <li><Link to="/profile">Profile</Link></li>
                                <li><Link to="/post">Post</Link></li>
                                <li><Link to="/lifecycle">Lifecycle</Link></li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <Route path="/" exact component={Home}></Route>
                <Route path="/profile" exact component={Profile}></Route>
                <Route path="/post" exact component={Post}></Route>
                <Route path="/lifecycle" exact component={Lifecycle}></Route>
            </div>
        </BrowserRouter>
    )
}









export default Routing;