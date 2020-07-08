<template>
  <div class="users">
    <AdminPanel />
    <div class="page-content">
      <form class="submit-form" v-if="!showEdit" @submit.prevent="formSubmit">
        <div class="field is-horizontal" v-if="!showEdit">
          <div class="label-align">
            <label class="label">New User: </label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <p class="control is-expanded has-icons-left">
                <input
                  class="input"
                  type="text"
                  placeholder="Username"
                  name="username"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div class="field is-narrow">
              <p class="control is-expanded has-icons-left">
                <input
                  class="input"
                  type="password"
                  placeholder="Password"
                  value=""
                  name="password"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <button class="button is-green">
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <form class="submit-form" @submit.prevent="formSubmit">
        <input type="text" name="id" id="data_id" style="display: none" />
        <div class="field is-horizontal" v-if="showEdit">
          <div class="label-align">
            <label class="label">Edit Selected User: </label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <p class="control is-expanded has-icons-left">
                <input
                  class="input"
                  type="text"
                  placeholder="Username"
                  name="username"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div class="field is-narrow">
              <p class="control is-expanded has-icons-left">
                <input
                  class="input"
                  type="password"
                  placeholder="Password"
                  value=""
                  name="password"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <button class="button is-green">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <br />
      <form @submit.prevent="emailSubmit" id="email_form">
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="label">
              <label for="" class="label label-align"
                >Company Email Credentials:</label
              >
            </div>
            <div class="field is-narrow">
              <p class="control is-expanded has-icons-left">
                <input
                  class="input"
                  type="email"
                  placeholder="Company Email"
                  name="email"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div class="field is-narrow">
              <p class="control is-expanded has-icons-left">
                <input
                  class="input"
                  type="password"
                  placeholder="Password"
                  value=""
                  name="password"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-green">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div class="label">
            <label for="" class="label-align label"
              >Current Email: {{ this.company_mail }}</label
            >
          </div>
        </div>
      </form>
      <div class="columns is-multiline">
        <div
          v-for="user in users"
          :key="user._id"
          class="column is-one-quarter"
          :id="user._id"
        >
          <div class="card">
            <div class="card-image"></div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-5">Username:</p>
                  <p class="subtitle is-6">{{ user.username }}</p>
                  <hr />
                  <p class="title is-5">Password:</p>
                  <p class="subtitle is-6">{{ user.password }}</p>
                  <hr />
                  <p class="title is-6">User ID:</p>
                  <p class="subtitle is-6">{{ user._id }}</p>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <a class="card-footer-item" @click="editToggle(user._id)">Edit</a>
              <a class="card-footer-item" v-on:click="deletePost(user._id)"
                >Delete</a
              >
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminPanel from "../components/AdminPanel";

import PostService from "../adminService";
export default {
  name: "Users",
  components: {
    AdminPanel
  },
  data: function() {
    return {
      users: "",
      company_mail: "",
      showEdit: false
    };
  },
  async created() {
    const token = sessionStorage.getItem("token");
    if (!token) {
      this.$router.push({ path: "/" });
    }
    this.users = await PostService.getData("users");
    let newMail = await PostService.getData("company_mail");
    this.company_mail = newMail[0].email;
  },
  methods: {
    async deletePost(id) {
      this.users = await PostService.deleteData("users", id);
    },
    editToggle(id) {
      this.showEdit = !this.showEdit;
      document.getElementById(id).classList.toggle("highlighted");
      let id_field = document.getElementById("data_id");
      id_field.value = id;
    },
    async formSubmit() {
      const form = document.querySelector(".submit-form");
      var form_data = new FormData(form);
      const inputs = document.querySelectorAll(".input");
      for (let input of inputs) {
        input.value = "";
      }
      this.users = await PostService.postUser("users", form_data);
    },
    async emailSubmit() {
      console.log("hello");
      const form = document.getElementById("email_form");
      let form_data = new FormData(form);
      const inputs = document.querySelectorAll(".input");
      for (let input of inputs) {
        input.value = "";
      }
      let data = await PostService.postData("company_mail", form_data);
      this.company_mail = data[0].email;
    }
  }
};
</script>

<style></style>
