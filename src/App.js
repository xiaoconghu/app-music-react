import React, {Component} from 'react';
import './App.css';
import TabExample from "./components/top/top";

class App extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props.location);
        if(this.props.location.query){
            this.setState({initialPage: this.props.location.query.initialPage})
        }

    }
    render() {
        return (
            <div className="App">
                <TabExample></TabExample>
            </div>
        );
    }
}

export default App;
