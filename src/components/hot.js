/**
 * Created by xiaoconghu on 2018/7/30.
 */
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import {HotChild} from "./hot-child";

export class Hot extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <div>这是hot组件</div>
                <Switch>
                    <Route path="/hot/child" exact={true} component={HotChild}/>
                </Switch>
            </div>

        )
    }
}

