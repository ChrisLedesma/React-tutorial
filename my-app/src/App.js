import React, { Component } from "react";
import Ninjas from "./Ninjas"; //nested ninjas component
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Big Yoshi", age: 30, color: "black", id: 1 },
      { name: "Medium Yoshi", age: 20, color: "black", id: 2 },
      { name: "Small Yoshi", age: 12, color: "black", id: 3 },
    ],
  };
  //get ninja details from AddNinja
  addNinja = (ninja) => {
    //assign random id
    ninja.id = Math.random();
    //copy ninjas array and add new ninja data
    let ninjas = [...this.state.ninjas, ninja];
    //update ninjas array with added ninja
    this.setState({
      ninjas: ninjas,
    });
  };
  deleteNinja = (id) => {
    //filter/remove any data with same id as selected
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });
    //set updated array
    this.setState({
      ninjas: ninjas,
    });
  };
  componentDidMount() {
    console.log("component mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("component updated");
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>Watap!</h1>
        <p>Elo! :D</p>
        {/* Added Ninjas component,
            Pass ninjas array to Ninjas.js,
            Delete ninja function added */}
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
