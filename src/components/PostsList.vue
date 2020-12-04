<template>
  <section>
    <MainPost
    :post="posts[0]"
    />
    <div class="posts">
      <h2 class="posts__title">All articles</h2>
      <ul class="posts__list">
        <Post
          v-for="post of posts" :key="post.id"
          :post="post"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import Post from '@/components/Post.vue';
import MainPost from '@/components/MainPost.vue';

export default {
  name: 'PostsList',
  props: {
    posts: Array,
  },
  components: {
    Post,
    MainPost,
  },
};
</script>

<style scoped>
  .posts {
    width: 640px;
    border-top: 2px solid #000;
    margin: 34px auto 0;
  }

  .posts__list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    justify-content: space-between;
    align-content: center;
  }

  .posts__title {
    margin: 64px auto 39px;
    font-size: 44px;
    font-weight: 700;
    line-height: 52.51px;
    text-align: center;
  }

  @media (max-width: 680px) {
    .posts {
      margin: 52px 0;
      width: 100vw;
    }

    .posts__list {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 20px;
    }

    .posts__title {
      margin: 56px auto 29px;
      font-size: 32px;
      line-height: 38.19px;
    }
  }

</style>
