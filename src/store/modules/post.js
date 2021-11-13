const post = {
  actions: {},
  mutations: {},
  state: {
    posts: [],
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
  },
};

export default post;
