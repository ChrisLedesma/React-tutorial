import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { deleteSelectPost } from '../actions/postActions';

//wrap post props with params
function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Post extends Component {
  //send selected id to dispatch
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
  }
  render() {
    //console.log(this.props)
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading...</div>
    );
    return <div className="container">{post}</div>;
  }
}
//get value of from state of redux and attatch to props
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.params.post_id;
  return {
    post: state.posts.find((post) => post.id === id),
  };
};
//trigger action
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {dispatch(deleteSelectPost(id))}
  };
};

//connect this component to redux
export default withParams(connect(mapStateToProps, mapDispatchToProps)(Post));
