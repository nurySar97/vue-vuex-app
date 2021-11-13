const getPostsURL = (limit = 3) => {
  return `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`;
};

const post = {
  actions: {
    async fetchPosts({ commit }, limit = 5) {
      const url = getPostsURL(limit);
      const res = await fetch(url);
      const posts = await res.json();
      commit("setPosts", posts);
      commit("setIsPostsLoaded", true);
    },
  },
  mutations: {
    setPosts(state, posts = []) {
      state.posts = posts;
    },
    setIsPostsLoaded(state, value = false) {
      state.isPostsLoaded = value;
    },
    createPost(state, post={}){
      state.posts.unshift(post)
    }
  },
  state: {
    posts: [],
    isPostsLoaded: false,
  },
  getters: {
    getAllPosts: (state) => state.posts,
    getPostsCount: (state) => state.posts.length,
  },
};

export default post;
