import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TabExample from "./components/top/top";
import Hot from "./components/hot";
import Recommend from "./components/recommend/recommend";
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props.location);
        if(this.props.location.query){
            this.setState({initialPage: this.props.location.query.initialPage})
        }

    }
    render() {
        return (
            <div className="App">
                <TabExample></TabExample>
                {/*<Route path="/hot" component={Hot}></Route>*/}
                {/*<Route path="/recommend" component={Recommend}></Route>*/}
            </div>
        );
    }
}

export default App;
