import {Badge, Tabs} from 'antd-mobile';
import React, {Component} from 'react';
import Recommend from "../recommend/recommend";
import {withRouter} from 'react-router-dom'
import {Singer} from "../singer/singer";
import {Search} from "../search/search";
import {Seniority} from "../seniority/seniority";
import './top.scss';

const tabs = [
    {title: <Badge text={''}>推荐</Badge>},
    {title: <Badge text={''}>歌手</Badge>},
    {title: <Badge dot>排行</Badge>},
    {title: <Badge dot>搜索</Badge>},
];

class TabExample extends Component {
    state = {
        initialPage: 1
    };

    constructor(props) {

        super(props);

    }

    componentDidMount() {
        console.log(this.props.location);
        if (this.props.location.query) {
            this.setState({initialPage: this.props.location.query.initialPage})
        }

    }

    clickTab = (tab, index) => {
        if (index === 0) {
            this.props.history.push("/recommend")
        } else if (index === 1) {
            this.props.history.push("/hot")
        }
    };
    changTab = ($event) => {
    }

    render() {
        return (
            <div>
                <div   className="top">
                    <h3 className="header">Monica Music</h3>
                    <i className="iconfont icon-yonghu"></i>
                </div>
                <Tabs tabs={tabs}
                      initialPage={0}
                      swipeable={false }
                      useOnPan={false}
                      onChange={this.changTab}
                      onTabClick={this.clickTab}

                >
                    <div className="container" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff',
                    }}>
                        <Recommend></Recommend>
                    </div>
                    <div id="singerView" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff'
                    }}>
                        <Singer></Singer>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff'
                    }}>
                        <Seniority></Seniority>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff'
                    }}>
                        <Search></Search>
                    </div>
                </Tabs>
            </div>
        );
    }
}

export default withRouter(TabExample);