import React, {Component} from 'react';
import {Carousel, WingBlank} from 'antd-mobile';
import recommendService from '../../core/api-server/recommend';
import {withRouter} from 'react-router-dom'
import './recommend.scss'

class Recommend extends Component {

    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        swipes: [],
        cdInfo: []
    };

    constructor(props) {
        super(props)

    }

    componentDidMount() {

        this.getRecommend();
        this.getCdInfo();
        console.log(this.props.location);
        if (this.props.location.query) {
            this.setState({initialPage: this.props.location.query.initialPage})
        }
    }

    componentWillMount() {

    }

    beforeChange = (from, to, e) => {

    }
    afterChange = (e) => {

    }

    render() {
        return (
            <div style={{width: '100%'}}>
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite={true}
                        swipeSpeed={50}
                        beforeChange={this.beforeChange}
                        afterChange={this.afterChange}
                    >
                        {this.state.swipes.map(item => (
                            <a
                                key={item}
                                style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}
                            >
                                <img
                                    src={item.picUrl}
                                    alt=""
                                    style={{width: '100%', verticalAlign: 'top'}}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({imgHeight: 'auto'});
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <div style={{flex: 1, overflowY: 'auto'}}>
                    <h5 className="list-title">热门歌单推荐</h5>
                    <div className="song-recommend">
                        <ul>
                            {
                                this.state.cdInfo.map((item, index) => (
                                    <li key={index} onClick={this.goToDetail.bind(item.dissid)}>
                                        <div className="song-img"><img width={60} height={60} src={item.imgurl}/></div>
                                        <div className="song-info">
                                            <p href="">{item.creator.name}</p>
                                            <p>{item.dissname}</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )

    }

    getRecommend() {
        recommendService.getRecommend().then(success => {
            let arr = success.data.slider;
            arr.splice(arr.length - 1, 1);
            this.setState({swipes: arr});

            console.log(this.state.swipes);
        })
    }

    getCdInfo() {
        recommendService.getCdInfo().then(success => {
            let items = success.data.list;
            this.setState({cdInfo: items})
        })
    }

    goToDetail = () => {

    }
}

export default withRouter(Recommend)