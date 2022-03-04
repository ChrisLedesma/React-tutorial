const initState = {
  posts: [
    { id: '1', title: 'cat', body: 'pet da cat' },
    { id: '2', title: 'dog', body: 'pet da dog' },
    { id: '3', title: 'tutel', body: 'pet da tutel' }
  ],
};

const rootReducer = (state = initState, action) => {
  //console.log(action);
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id
    });
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
};

export default rootReducer;

