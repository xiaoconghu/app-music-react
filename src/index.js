import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Hot from "./components/hot";
import {Recommend} from "./components/recommend/recommend";
import TabExample from './components/top/top'
import './components/top/top.css'
import './assets/iconfont_2/iconfont.css'

const router = (
    <Router>
        <div>
            <Route path="/" component={App}>
            </Route>
        </div>
    </Router>
)
ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();

