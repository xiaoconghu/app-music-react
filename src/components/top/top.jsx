import {Tabs, WhiteSpace, Badge} from 'antd-mobile';
import React, {Component} from 'react';
import {Recommend} from "../recommend/recommend";
const tabs = [
    {title: <Badge text={'3'}>推荐</Badge>},
    {title: <Badge text={'今日(20)'}>歌手</Badge>},
    {title: <Badge dot>排行</Badge>},
    {title: <Badge dot>搜索</Badge>},
];

export class TabExample extends Component {
    constructor() {

        super()
    }

    render() {
        return (
            <div>
                <div className="top">
                    <h3 className="header">Monica Music</h3>
                    <i className="iconfont icon-yonghu"></i>
                </div>
                <Tabs tabs={tabs}
                      initialPage={1}
                      onChange={(tab, index) => {
                          console.log('onChange', index, tab);
                      }}
                      onTabClick={(tab, index) => {
                          console.log('onTabClick', index, tab);
                      }}
                >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff'
                    }}>
                        <Recommend></Recommend>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '150px',
                        backgroundColor: '#fff'
                    }}>
                        Content of second tab
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '150px',
                        backgroundColor: '#fff'
                    }}>
                        Content of third tab
                    </div>
                </Tabs>
            </div>
        );
    }
}