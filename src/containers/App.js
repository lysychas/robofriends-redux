import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import { robots } from "./robots";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
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
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchfield.toLocaleLowerCase());
    });
    return !robots.length ? ( //by default js evaluates 0 to false, set ! for true
      <h1 className="tc ttl">Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1 ttl">RoboFriends</h1> {/*ttl = to lowercase */}
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
