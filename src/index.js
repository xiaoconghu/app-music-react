import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter as Router, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import {Recommend} from "./components/recommend/recommend";
import './assets/iconfont_2/iconfont.css'
import './assets/css/global.scss'

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

