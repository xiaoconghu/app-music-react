import React, {Component} from "react"
import {NWIndexList} from "./nw-index-list";
import singerService from '../../core/api-server/singer'
import {CommonUtil} from "../../core/utils/common-util";

export class Singer extends Component {
    state = {
        singerData: [{index:'00',childNode:[]}]
    };

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.getSingerList()
    }

    render() {
        return (<div style={{width:'100%'}}>
            <NWIndexList data={this.state.singerData}></NWIndexList>
        </div>)
    }

    getSingerList() {
        let data, arr = [], singerData = [];

        let generateBig = CommonUtil.generateBig_1();
        singerService.getSingerList().then(success => {
            data = success.data.list;
            data.forEach((_item, index) => {
                _item._Fsinger_mid = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${_item.Fsinger_mid}.jpg?max_age=2592000`
                if (index < 5) {
                    arr.push(_item);
                }
            });
            singerData.push({index: '热', childNode: arr});
            generateBig.forEach(item => {
                let arr = data.filter((_item, index) => {
                    if (item === _item.Findex) {
                        return _item
                    }
                });
                let obj;
                if (data.length > 0) {
                    obj = {index: item, childNode: arr};
                }
                singerData.push(obj)
            })
            this.setState({singerData: singerData})
        });

    }
}