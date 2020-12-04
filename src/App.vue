<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;
  }

  @font-face {
    font-family: "New York Extra Large";
    src: url("./fonts/NewYorkExtraLarge-Bold.otf") format("otf"),
    url("./fonts/NewYorkExtraLarge-Bold.otf") format("otf");
  }

  @font-face {
    font-family: "New York Extra Medium";
    src: url("./fonts/NewYorkExtraLarge-Medium.otf") format("otf"),
    url("./fonts/NewYorkExtraLarge-Medium.otf") format("otf");
  }

  @font-face {
    font-family: "SF Pro Display Medium";
    src: url("./fonts/SF-Pro-Display-Medium.otf") format("otf"),
    url("./fonts/SF-Pro-Display-Medium.otf") format("otf");
  }

  @font-face {
    font-family: "SF Mono Regular";
    src: url("./fonts/SF-Mono-Regular.otf") format("otf"),
    url("./fonts/SF-Mono-Regular.otf") format("otf");
  }

  html,body,h1,h2,h3 {
    margin: 0;
    font-family: "New York Extra Large Bold", serif;
    color: #000;
    box-sizing: border-box;
  }
  h4,h5,h6 {
    margin: 0;
    font-family: "SF Pro Display Medium", sans-serif;
  }
  .link {
    text-decoration: none;
  }

  .link:link {
    color: #000;
  }

  .link:visited {
    color: #000;
  }

  .link:hover {
    color: #42b983;
    transition: 0.3s;
  }
</style>
