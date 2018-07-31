import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import {Hot} from "./components/hot";
import {Recommend} from "./components/recommend/recommend";
import {TabExample} from './components/top/top'
const router = (
    <Router>
        <div>
            {/*<ul>*/}
                {/*<li><Link to="/">主页</Link></li>*/}
                {/*<li><Link to="/hot">热门</Link></li>*/}
                {/*<li><Link to="/zhuanlan">专栏</Link></li>*/}
                {/*<li><Link to="/recommend">专栏</Link></li>*/}
            {/*</ul>*/}
            {/*<hr/>*/}
            <TabExample></TabExample>
            <Route exact path="/" component={App}></Route>
            <Route path="/hot" component={Hot}></Route>
            <Route path="/recommend" component={Recommend}></Route>
        </div>
    </Router>
)
ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();

