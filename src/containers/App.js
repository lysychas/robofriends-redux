import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import { robots } from "./robots";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

import { setSearchField } from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

// const state = {
//   robots: robots,
//   searcField: ''
// };

class App extends Component {
  constructor(params) {
    super();
    this.state = {
      robots: []
      // searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
    // this.setState({ robots: robots });
  }

  // onSearchChange = event => {
  //   this.setState({ searchfield: event.target.value });
  // };

  render() {
    // const { robots, searchfield } = this.state;
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
    return !robots.length ? ( //by default js evaluates 0 to false, set ! for true
      <h1 className="tc ttl">Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1 ttl">RoboFriends</h1> {/*ttl = to lowercase */}
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); // higher order function/component
