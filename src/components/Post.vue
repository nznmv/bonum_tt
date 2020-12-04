<template>
  <router-link
    :to="{name: 'PostPage', params: {id: post.id}}"
    v-if="post.id != 1"
    class="link"
  >
    <li
      class="post"
    >
      <img
        class="post__image"
        :src="post.image"
        :alt="post.title">
      <h4 class="post__title">
        {{post.title}}
      </h4>
    </li>
  </router-link>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
  .post {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 304px;
    margin-bottom: 64px;
  }

  .post__image {
    width: 100%;
    height: 176px;
    object-fit: cover;
  }

  .post__title {
    font-size: 22px;
    line-height: 26.4px;
    font-weight: 500;
    margin-top: 20px;
  }

  @media (max-width: 680px) {
    .post {
      margin-bottom: 42px;
      max-width: 335px;
    }

    .post__image {
      max-width: 335px;
      max-height: 194px;
      object-fit: cover;
    }
  }
</style>
