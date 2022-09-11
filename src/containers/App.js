import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css'
import Scroll from "../components/Scroll";

class App extends Component {

    constructor () {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => this.setState({robots: user}))
    }

    OnSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render () {
        const { robots , searchfield} = this.state
        const filteredRobots = robots.filter( robo => {
            return robo.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        return (!robots.length) ?
            <h1 className="tc">Loading...</h1> :
            (
                <div className="tc">
                    <h1 className="f-subheadline">Robo Friends</h1>
                    <SearchBox searchChange={this.OnSearchChange} />
                    <Scroll>
                        <CardList robots = {filteredRobots} /> 
                    </Scroll>
                </div>   
            );
    }
    
}

export default App;