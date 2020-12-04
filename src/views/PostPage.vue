<template>
  <div>
    <PostPageComponent :post="post"/>
  </div>
</template>

<script>
import { getPost } from '@/api/posts';
import PostPageComponent from '@/components/PostPageComponent.vue';

export default {
  name: 'PostPage',
  components: {
    PostPageComponent,
  },
  props: ['id'],
  data() {
    return {
      post: Object,
    };
  },
  async mounted() {
    this.post = await getPost(this.id);
  },
};
</script>

<style scoped>

</style>
