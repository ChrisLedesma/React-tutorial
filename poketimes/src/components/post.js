import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//wrap post props with params
function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Post extends Component {
  //default id is null
  state = {
    post: null,
  };
  //set url post_id into state id
  componentDidMount() {
    //console.log(this.props);
    let { post_id } = this.props.params;
    let id = post_id;
    //concatenate and fetch url link with post_id
    axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => {
        this.setState({
          post: res.data,
        });
      });
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading...</div>
    );
    return <div className="container">{post}</div>;
  }
}

export default withParams(Post);
