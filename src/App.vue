<template>
  <div id="app">
    <div class="container">
      <div class="posts">
        <!-- Posts -->
        <h1>Posts</h1>
        <PostForm />

        <div v-if="isPostsLoaded && getPostsCount">
          <div
            class="post"
            v-for="(post, index) in getAllPosts"
            :key="index"
            v-bind:class="{ ['post--alone']: getPostsCount === 1 }"
          >
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
          </div>
        </div>

        <!-- Spinner -->
        <div class="text-center" v-if="!isPostsLoaded">
          <img width="100px" src="./assets/spinner.svg" alt="spinner" />
        </div>

        <!-- Alt alert  -->
        <p class="text-center" v-if="!getPostsCount && isPostsLoaded">
          No posts yet
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import PostForm from "./components/PostForm.vue";
export default {
  name: "App",
  components: {
    PostForm,
  },
  computed: {
    ...mapState({ isPostsLoaded: (s) => s.post.isPostsLoaded }),
    ...mapGetters(["getAllPosts", "getPostsCount"]),
  },
  methods: {
    ...mapActions(["fetchPosts"]),
    sleep: (time = 1000) => new Promise((r) => setTimeout(r, time)),
  },
  async mounted() {
    await this.sleep();
    this.fetchPosts(3);
  },
};
</script>

<style lang="scss">
*,
::after,
::before {
  box-sizing: border-box;
}

body,
html {
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: #fff;
  margin: 0;
  padding: 0;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

#app {
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding: 1rem;
  background-color: #2d2d2d;
}

.container {
  width: 100%;
  max-width: calc(1200px + 2rem);
  padding: 1rem;
  margin: 0 auto;
}

.post {
  border: 1px solid #efefef;
  border-top: 0;
  padding: 1rem;

  & > h2 {
    text-transform: capitalize;
  }

  &:first-child {
    border-radius: 5px 5px 0 0;
    border-top: 1px solid #efefef;
  }

  &:last-child {
    border-radius: 0 0 5px 5px;
    border-top: 0;
  }

  &.post--alone {
    border: 1px solid #efefef;
    border-radius: 5px;
  }
}

.text-center {
  text-align: center;
}
</style>
