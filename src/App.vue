<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "../node_modules/bulma/css/bulma.min.css";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

* {
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

#nav {
  padding: 10px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #63b038;
    }
  }
}

.is-green {
  font-weight: 600;
  background: #63b038;
  text-align: center;

  &:hover {
    background: #2c3e50;
    color: #63b038;
  }
}

.page-content {
  margin: 3rem;
  margin-top: 1rem;
}

.label-align {
  align-self: center;
  padding: 6px 1rem 0 0;
  margin-bottom: 12px;
}

.columns {
  margin-top: 1rem;
}

.highlighted {
  background: #cce5cc;
}

.card-footer-item {
  color: #63b038;
  font-weight: 700;

  &:hover {
    color: #2c3e50;
    background: #63b038;
  }
}

button {
  font-family: "Montserrat", sans-serif;
}
</style>
