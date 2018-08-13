import React, {Component} from "react"
import searchService from './../../core/api-server/search'
import './search.scss'
import {getSongUrlList} from '../../core/utils/song-util'

export class Search extends Component {
    state = {
        hotKey: [],
        songList: [],
        inputValue: '',
    };

    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.getSearchKey();
    };

    render() {
        return (
            <div className="container">
                <div className="search-t">
                    <div className="search">
                        <i className="iconfont icon-sousuo icon-color" style={{color: "#866363"}}></i>
                        <input type="text" className="search-input"
                               value={this.state.inputValue}
                               placeholder={'搜索歌曲、歌名'}
                               onInput={this.searchChange}
                        />
                        <i className="iconfont icon-delete icon-color" style={{color: "#866363"}}
                           onClick={this.deleteValue}></i>
                    </div>
                </div>
                {(!this.state.inputValue)
                    ?
                    <div className="search-hot-key">
                        <p>热门搜索</p>
                        <ul>
                            {this.state.hotKey.map((item, index) => (
                                <li className="hot-key" key={index} onClick={this.searchIt.bind(this, item.k)}>
                                    {item.k}
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                    :
                    <div className="search-list-se">
                        <ul>
                            {
                                this.state.songList.map((item, index) => (
                                    <li key={index} onClick={this.navigateToDetail.bind(this, index)}>
                                        <i className="iconfont icon-yinle1"></i>
                                        <span>{item.songname}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                }
            </div>

        )
    };

    getSearchKey() {
        searchService.getSearchKey().then(success => {
            let hotKey = success.data.hotkey.slice(0, 10);
            this.setState({hotKey: hotKey})
        }, failed => {
            console.log(failed.msg);
        })
    };

    searchChange = ($event) => {
        this.setState({inputValue: $event.target.value});
        this.search($event.target.value);

    };
    searchIt = ($event) => {
        console.log($event);
        this.setState({inputValue: $event});
        this.search($event);
    };

    search(value) {
        searchService.searchMusicByKeyWord(value).then(success => {
            let list = success.data.song.list;
            getSongUrlList(list).then(res => {
                this.setState({songList: res});
            }, failed => {

            })
        }, failed => {

        })
    }

    deleteValue = () => {
        this.setState({inputValue: ''})
    };

    navigateToDetail = (index) => {
        console.log(index);
    }
}
