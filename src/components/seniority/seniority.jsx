import React, {Component} from "react"
import seniorityService from "../../core/api-server/seniority"
import './seniority.scss'
export class Seniority extends Component {
    state = {
        listData: []
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.getTopList();
    }

    render() {
        return (

            <div className="seniority">
                <ul>
                    {
                        this.state.listData.map((item, index) => (
                            <li className="wrap" key={index}>
                                <img height="100" src={item.picUrl} alt=""/>
                                <ul>
                                    {
                                        item.songList.map((itemChild, index) => (
                                            <li className="info" key={index} onClick={this.goToDetail.bind(item.id)}>
                                                {index + 1} {itemChild.songname}-{itemChild.singername}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }

    getTopList() {
        seniorityService.getTopList().then(success => {
            console.log(success);
            let arr = success.data.topList;
            this.setState({listData: arr})
        }, failed => {
            console.log(failed);
        })
    }

    goToDetail(id) {

    }
}