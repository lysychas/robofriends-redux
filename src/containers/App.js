import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

import "./App.css";

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1 ttl">RoboFriends</h1> {/*ttl = to lowercase */}
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? ( //by default js evaluates 0 to false, set ! for true
            <h1 className="tc ttl">Loading</h1>
          ) : (
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          )}
        </Scroll>
      </div>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App); // higher order function/component
