import React, { Component } from "react";
import Ninjas from "./Ninjas"; //nested ninjas component

class App extends Component {
  state = {
    ninjas: [
      { name: "Big Yoshi", age: 999, belt: "black", id: 1 },
      { name: "Medium Yoshi", age: 888, belt: "black", id: 2 },
      { name: "Small Yoshi", age: 777, belt: "black", id: 3 },
    ],
  };
  render() {
    return (
      <div className="App">
        <h1>Watap!</h1>
        <p>Elo! :D</p>
        <Ninjas ninjas={this.state.ninjas} />
        {/* added Ninjas component */}
      </div>
    );
  }
}

export default App;