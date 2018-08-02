import React, {Component} from "react"
import searchService from './../../core/api-server/search'
import './search.scss'

export class Search extends Component {
    state = {
        hotKey: []
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <div className="search-t">
                    <div className="search">
                        <i className="iconfont icon-sousuo icon-color" style={{color: "#866363"}}></i>
                        <input type="text" className="search-input"
                               placeholder={'搜索歌曲、歌名'}
                               onInput={this.searchChange.bind()}
                        />
                        <i className="iconfont icon-delete icon-color" style={{color: "#866363"}}
                           onClick={this.deleteValue}></i>
                    </div>
                </div>
                <div className="search-hot-key">
                    <p>热门搜索</p>
                    <ul>
                        {this.state.hotKey.map((item, index) => (
                            <li className="hot-key" key={index}>
                                {item.k}
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>

        )
    }

    getSearchKey() {
        searchService.getSearchKey().then(success => {
            console.log(success);
            let hotKey = success.data.hotkey.slice(0, 10);
            this.setState({hotKey: hotKey})
        }, failed => {
            console.log(failed.msg);
        })
    }

    searchChange = () => {

    }

}