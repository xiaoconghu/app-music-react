import React, {Component} from 'react';
import {Carousel, WingBlank} from 'antd-mobile';
import recommendService from '../../core/api-server/recommend';

export class Recommend extends Component {

    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        swipes: [],
    };

    constructor(props) {
        super(props)

    }

    componentDidMount() {

        this.getCdInfo();
    }

    componentWillMount() {

    }

    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
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
        );
    }

    getCdInfo() {
        recommendService.getRecommend().then(success => {
            let arr = success.data.slider;
            arr.splice(arr.length - 1, 1);
            this.setState({swipes: arr});

            console.log(this.state.swipes);
        })
    }
}
