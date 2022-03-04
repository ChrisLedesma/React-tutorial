import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";
import { connect } from 'react-redux';

//changed to class since axios doesn't work with function
class Home extends Component {

// replaced with redux method 

/*   state = {
    posts: [],
  };
  //cycle through first 10 posts and add to state array
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      //console.log(res);
      this.setState({
        posts: res.data.slice(0, 10),
      });
    });
  } */

  render() {
    console.log(this.props)
    //set posts with current state array
    const { posts } = this.props;
    //display posts if there are any
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A pokeball" />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet</div>
    );
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}
//get value of from state of redux and attatch to props
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
//connect this component to redux
export default connect(mapStateToProps)(Home);
