<template>
  <section class="main_post">
    <router-link
      :to="{name: 'PostPage', params: {id: post.id}}"
      class="link link__post"
    >
      <img
        :src="post.image"
        :alt="post.title"
        class="main_post__image"
      >
      <h1 class="main_post__title">
        {{post.title}}
      </h1>
    </router-link>

    <h3 class="main_post__subtitle">
      {{post.subtitle}}
    </h3>
  </section>
</template>

<script>
export default {
  name: 'MainPost',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
 .main_post {
   margin: 210px auto 0;
 }

  .main_post__image {
    width: 854px;
    height: 533px;
    margin: 0 auto;
    object-fit: cover;
  }

  .main_post__title {
    margin: 14px auto 0;
    max-width: 854px;
    font-size: 54px;
    font-weight: 700;
    line-height: 54px;
    text-align: center;
  }

 .main_post__subtitle {
   margin: 32px auto 0;
   max-width: 592px;
   font-family: "SF Mono Regular",sans-serif;
   font-size: 20px;
   font-weight: 400;
   line-height: 34px;
   text-align: center;
 }

 @media (max-width: 1008px) {
   .main_post {
     margin: 117px 0 0;
     width: 100vw;
   }

   .main_post__image {
     width: 100%;
     height: auto;
     margin: 0;
   }

   .main_post__title {
     margin: 32px auto 0;
     padding: 0 20px;
     font-size: 36px;
     line-height: 43px;
   }

   .main_post__subtitle {
     margin: 24px auto 0;
     padding: 0 20px;
     font-size: 16px;
     line-height: 27.2px;
   }
 }
</style>
