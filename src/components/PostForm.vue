<template>
  <form class="post-form" @submit.prevent="onSubmit">
    <div class="post-form__item">
      <label
        class="post-form__label"
        for="title"
        v-bind:class="{ ['post-form__label--active']: title.length }"
        >Title</label
      >
      <input
        class="post-form__input"
        id="title"
        type="text"
        placeholder="Title"
        v-model="title"
      />
    </div>
    <div class="post-form__item">
      <label
        class="post-form__label"
        for="body"
        v-bind:class="{ ['post-form__label--active']: body.length }"
        >Body</label
      >
      <input
        class="post-form__input"
        id="body"
        type="text"
        placeholder="Body"
        v-model="body"
      />
    </div>
    <button class="post-form__btn" type="submit">Create post</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({
    title: "",
    body: "",
  }),
  methods: {
    ...mapMutations(["createPost"]),
    onSubmit() {
      if (this.title && this.body) {
        this.createPost({
          id: Date.now(),
          title: this.title,
          body: this.body,
        });
        this.title = "";
        this.body = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$white: #fff;
$black: #000;
$secondary: #6c757d;

.post-form {
  display: block;
  margin-bottom: 1rem;
  font-size: 1rem;
  text-align: center;

  &__item {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    font-size: inherit;
    max-width: 30em;
    margin: 1em auto;

    &:focus-within {
      & > .post-form__label {
        top: -1.15em;
        font-size: 0.75em;
        color: $white;
      }
    }

    & > .post-form__label {
      position: absolute;
      color: $secondary;

      font-size: inherit;
      top: 0.6em;
      left: 0.1em;
      padding-left: 0.5em;
      transition: all 0.25s linear;
      cursor: text;

      &.post-form__label--active {
        top: -1.15em;
        font-size: 0.75em;
        color: $white;
      }
    }
  }

  &__input {
    width: 100%;
    outline: none;

    text-transform: capitalize;

    font-size: inherit;
    padding: 0.5em;
    border-radius: 0.5em;
    color: $black;
    border: 0.1em solid $secondary;

    &[placeholder="Title"] {
      font-weight: 700;
    }

    &:first-child {
      font-weight: bold;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: transparent;
    }
  }

  &__btn {
    display: inline-block;
    border: 0;
    outline: 0;
    cursor: pointer;
    font-weight: bold;
    color: $secondary;

    font-size: inherit;
    padding: 0.5em 0.7em;
    border-radius: 0.25em;

    &:hover {
      transform: scale(0.98);
    }
  }
}
</style>
