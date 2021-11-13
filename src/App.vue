<template>
  <div id="app">
    <div class="container">
      <div class="posts">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=3"
    );
    const posts = await res.json();
    this.posts = posts;
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

.posts {
  padding: 1rem;
  border: 1px solid #efefef;
  border-radius: 5px;
}
</style>
