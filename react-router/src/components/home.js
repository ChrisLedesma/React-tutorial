import React, { Component } from "react";
import axios from 'axios';

//changed to class since axios doesn't work with function
class Home extends Component {
  componentDidMount(){

  }
 render() {
  return (
    <div className="container">
      <h4 className="center">Home</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
        consequuntur excepturi sed necessitatibus minima dicta beatae sapiente
        blanditiis minus sequi cupiditate facere magni, aliquid iste deserunt
        laboriosam modi, commodi laborum!
      </p>
    </div>
  );
 }
};

export default Home;
