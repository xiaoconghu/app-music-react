/**
 * Created by xiaoconghu on 2018/7/30.
 */
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import {HotChild} from "./hot-child";
import {withRouter} from 'react-router-dom'

 class Hot extends Component {
    constructor(props) {
        super(props);
    }

    goBack = () => {
        console.log(111);
        this.props.history.push({pathname:'/recommend',query:{initialPage:3}})
    }

    render() {
        return (
            <div>
                <div>这是hot组件</div>
                <button onClick={this.goBack}>点击返回上一层</button>
                <Switch>
                    <Route path="/hot/child" exact={true} component={HotChild}/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(Hot)