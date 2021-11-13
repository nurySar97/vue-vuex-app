<template>
  <div id="app">
    <div class="container">
      <div class="posts">
        <!-- Posts -->
        <h1>Posts</h1>
        <div v-if="allPosts.length">
          <div
            class="post"
            v-for="(post, index) in allPosts"
            :key="index"
            v-bind:class="{ ['post--alone']: allPosts.length === 1 }"
          >
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
          </div>
        </div>

        <!-- Spinner -->
        <div class="text-center" v-if="!isLoaded">
          <img width="100px" src="./assets/spinner.svg" alt="spinner" />
        </div>

        <!-- Alt alert  -->
        <p class="text-center" v-if="!allPosts.length && isLoaded">
          No posts yet
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    allPosts() {
      return this.$store.getters.allPosts;
    },
  },
  data() {
    return {
      posts: [],
      isLoaded: false,
    };
  },
  methods: {
    sleep: (time = 1000) => new Promise((r) => setTimeout(r, time)),
  },
  async mounted() {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    const posts = await res.json();
    await this.sleep();
    this.posts = posts;
    this.isLoaded = true;
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
