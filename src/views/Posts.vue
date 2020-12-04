<template>
  <div class="posts">
    <PostsList :posts="posts"/>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import { getPosts } from '@/api/posts';
import PostsList from '@/components/PostsList.vue';
import InfiniteLoading from 'vue-infinite-loading';

export default {
  data() {
    return {
      posts: [],
      page: 1,
      id: Number,
    };
  },
  components: {
    PostsList,
    InfiniteLoading,
  },
  methods: {
    async infiniteHandler($state) {
      const results = await getPosts(this.page);

      if (results.length) {
        if (this.page > 1) {
          this.posts = this.posts.concat(results);
        }
        this.page += 1;
        $state.loaded();
      } else {
        $state.complete();
      }
    },
  },
  async mounted() {
    this.posts = await getPosts(this.page);
  },
};
</script>
