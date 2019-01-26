import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";

// Redux Store
import store from "./store";

// CSS
import './App.css';

// Components
import Navbar from "./components/layout/Navbar";
import Homepage from "./components/homepage/Homepage";
import Footer from "./components/layout/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Tags from "./components/tags/Tags";


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Navbar/>
                        <Route exact path="/" component={Homepage}/>
                        <Route exact path="/tags" component={Tags}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/login" component={Login}/>
                        <Footer/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
