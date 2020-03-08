import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
// import { robots } from "./robots";
import Scroll from './Scroll'
import "./App.css";

// const state = {
//   robots: robots,
//   searcField: ''
// };

class App extends Component {
  constructor(params) {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
    // this.setState({ robots: robots });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name
        .toLocaleLowerCase()
        .includes(this.state.searchfield.toLocaleLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1 className="tc ttl">Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1 ttl">RoboFriends</h1> {/*ttl = to lowercase */}
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
