<template>
  <form class="post-form">
    <div class="post-form__item">
      <label for="title">Title</label>
      <input
        class="post-form__input"
        id="title"
        type="text"
        placeholder="Title"
      />
    </div>
    <div class="post-form__item">
      <label for="body">Body</label>
      <input
        class="post-form__input"
        id="body"
        type="text"
        placeholder="Body"
      />
    </div>
    <button class="post-form__btn" type="submit">Create post</button>
  </form>
</template>

<style lang="scss" scoped>
$white: #fff;
$black: #000;
$secondary: #6c757d;

.post-form {
  display: block;
  margin-bottom: 1rem;
  font-size: 1rem;

  &__item {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    font-size: inherit;
    max-width: 30em;
    margin: 1em 0;

    &:focus-within {
      & > label {
        top: -1.15em;
        font-size: 0.75em;
        color: $white;
      }
    }

    & > label {
      position: absolute;
      color: $secondary;

      font-size: inherit;
      top: 0.6em;
      left: 0.1em;
      padding-left: 0.5em;
      transition: all 0.25s linear;
      cursor: text;
    }
  }

  &__input {
    width: 100%;
    outline: none;
    color: $black;

    font-size: inherit;
    padding: 0.5em;
    border-radius: 0.5em;
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
