import React, {Component} from "react"
import './nw-index-list.css'

export class NWIndexList extends Component {
    state = {
        data: []
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (<div style={{width: '100%'}}>
            <div className="list-view">
                <ul>
                    {this.props.data.map((item, index) => (
                        <li key={index}>
                            <h2 className="index-list-title">{item.index}</h2>
                            <ul>
                                {item.childNode.map((_item, index) => (
                                    <li key={index} className="singer-l">
                                        <img className="singerImg" src={_item._Fsinger_mid} alt=""/>
                                        <span className="singer-name">{_item.Fother_name}</span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}

                </ul>
            </div>

            <div className="list-shortcut">
                <ul>
                    {this.props.data.map((item, index) => (
                        <li key={index}>{item.index}</li>
                    ))}
                </ul>
            </div>

        </div>)
    }
}