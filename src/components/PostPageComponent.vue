<template>
  <section class="main_post main_post--opened">
    <router-link
      to="/"
      class="link link--home"
    >
      <h4>X</h4>
    </router-link>
    <h1 class="main_post__title main_post__title--opened">
      {{post.title}}
    </h1>
    <h3 class="main_post__subtitle main_post__subtitle--opened">
      {{post.subtitle}}
    </h3>
    <img
      :src="post.image"
      :alt="post.title"
      class="main_post__image main_post__image--opened"
    >
    <p class="main_post__description--opened">
      <span v-html="post.description"
      class="main_post__description--text"
      ></span>
    </p>
  </section>
</template>

<script>

export default {
  name: 'PostPage',
  props: {
    post: Object,
  },
};
</script>

<style>
.main_post--opened {
  margin-bottom: 150px;
}

.main_post__title--opened {
  margin: 186px auto 0;
}

.main_post__subtitle--opened {
  margin: 32px auto 52px;
}

.main_post__image--opened {
  width: 100vw;
  max-height: 900px;
}

.main_post__description--opened{
  border-top: 2px solid black;
  max-width: 640px;
  margin: 32px auto 0;
  font-family: "New York Extra Medium", serif;
  font-size: 20px;
  line-height: 34px;
  text-align: left;
  padding: 12px 0;
}

.main_post__description--text {
  margin: 32px 0;
}

.link--home {
  text-decoration: none;
  position: fixed;
  top: 50px;
  left: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: whitesmoke;
  text-align: center;
  line-height: 50px;
}

.link--home:hover {
  transform: scale(1.1);
  background-color: gray;
  transition: 0.3s;
}

@media (max-width: 680px) {
  .main_post__title--opened {
    font-size: 36px;
    line-height: 43px;
    margin: 117px auto 0;
    padding: 0 20px;
  }

  .main_post__subtitle--opened {
    margin: 24px auto 36px;
    padding: 0 20px;
  }

  .main_post__description--opened{
    margin: 24px auto 0;
    padding: 8px 20px 0;
    font-size: 16px;
    line-height: 27.2px;
  }

  .main_post__description--text {
    margin: 24px 0;
  }

  .link--home {
    top: 25px;
    left: 25px;
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
}
</style>
