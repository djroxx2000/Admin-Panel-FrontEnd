<template>
  <div class="admin-panel">
    <div id="nav">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="index.html">
            <img src="../assets/logo.png" />
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            @click="openNav"
            v-bind:class="{ 'is-active': isActive }"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          class="navbar-menu"
          v-bind:class="{ 'is-active': isActive }"
        >
          <div class="navbar-start">
            <a class="navbar-item">
              <router-link to="/users">Users</router-link>
            </a>

            <a class="navbar-item">
              <router-link to="/products">Products</router-link>
            </a>

            <a class="navbar-item">
              <router-link to="/blogs">Blogs</router-link>
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  <router-link to="/team">Team</router-link>
                </a>
                <a class="navbar-item">
                  <router-link to="/testimonials">Testimonials</router-link>
                </a>
                <a class="navbar-item">
                  <router-link to="/gallery">Gallery</router-link>
                </a>
                <a class="navbar-item">
                  <router-link to="/pagedata">Page Data</router-link>
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item" href="index.html">Home</a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-red" @click="clearToken">
                  <router-link to="/" class="hover-change">Logout</router-link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminPanel",
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    openNav() {
      this.isActive = !this.isActive;
    },
    clearToken() {
      sessionStorage.clear();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../node_modules/bulma/sass/utilities/_all.sass";
@import "../../node_modules/bulma/sass/base/_all.sass";
@import "../../node_modules/bulma/sass/elements/button.sass";
@import "../../node_modules/bulma/sass/elements/container.sass";
@import "../../node_modules/bulma/sass/elements/title.sass";
@import "../../node_modules/bulma/sass/form/_all.sass";
@import "../../node_modules/bulma/sass/components/navbar.sass";
@import "../../node_modules/bulma/sass/layout/hero.sass";
@import "../../node_modules/bulma/sass/layout/section.sass";

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.is-red {
  font-weight: 600;
  background: #ce373c;

  &:hover {
    background: #ff0f1b;
  }
}
</style>
