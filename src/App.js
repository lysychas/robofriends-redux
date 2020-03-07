import React, { Component, Fragment } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import './App.css';

// const state = {
//   robots: robots,
//   searcField: ''
// };

class App extends Component {
  constructor(params) {
    super();
    this.state = {
      robots: robots,
      searchfield: ""
    };
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
    // console.log(filteredRobots);
    return (
      <div className="tc">
        <h1 className='f1 ttl'>RoboFriends</h1> {/*ttl = to lowercase */}
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
