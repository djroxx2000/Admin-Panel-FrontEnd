<template>
  <div class="login-form">
    <div class="form-container">
      <div class="notification is-danger" v-if="invalid">
        <button class="delete" @click="invalid = false"></button>
        Invalid Login Credentials
      </div>
      <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left">
          <input
            class="input"
            type="text"
            placeholder="Username"
            value=""
            name="username"
            v-model="username"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <p class="control has-icons-left">
          <input
            class="input"
            type="password"
            placeholder="Password"
            name="password"
            v-model="password"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-green" @click="userLogin">
            Login
          </button>
          <a class="button is-green" href="index.html">
            Home
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
      invalid: false
    };
  },
  mounted() {
    Axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          this.invalid = true;
          return error;
        }
      }
    );
  },
  methods: {
    // async userLogin(event) {
    //   event.preventDefault();
    //   const res = await Axios.get("api/data/users");
    //   for (const data of res.data) {
    //     if (data.username == this.username) {
    //       if (data.password == this.password) {
    //         this.$router.push({ path: "/users" });
    //       }
    //     } else {
    //       this.invalid = true;
    //     }
    //   }
    // }
    async userLogin(event) {
      event.preventDefault();
      let userData = {
        username: this.username,
        password: this.password
      };
      const res = await Axios.post("api/data/login", userData);
      if (res.status === 201) {
        sessionStorage.setItem("token", res.data.token);
        this.$router.push({ path: "/users" });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.label {
  text-align: center;
  justify-content: center;
}

.form-container {
  width: 400px;
  margin: auto;
  margin-top: 5rem;
}

@media screen and(max-width: 500px) {
  .form-container {
    width: 80%;
  }
}
</style>
