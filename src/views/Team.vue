<template>
  <div class="team">
    <AdminPanel />
    <div class="page-content">
      <form v-if="!showEdit" class="submit-form" @submit.prevent="formSubmit">
        <div class="label-align">
          <label class="label">Name: </label>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-narrow">
              <p class="control is-expanded has-icons-left">
                <input
                  class="input"
                  type="text"
                  placeholder="Team Member No.1"
                  name="name"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="label-align">
          <label class="label">Job Description: </label>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-narrow">
              <p class="control is-expanded has-icons-left">
                <input
                  class="input"
                  type="text"
                  placeholder="Full Stack Web Dev"
                  name="role"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-briefcase"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="label-align">
          <label class="label">Member Photo</label>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="file has-name">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name="team_img"
                  @change="changeFileView"
                />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label file-label-text">
                    Choose a file…
                  </span>
                </span>
                <span class="file-name"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-green">
                Add Member
              </button>
            </div>
          </div>
        </div>
      </form>

      <form class="submit-form" @submit.prevent="formSubmit">
        <input type="text" name="id" id="data_id" style="display: none" />
        <div class="edit-form" v-if="showEdit">
          <div class="label-align">
            <label class="label">Edit Member Details: </label>
          </div>
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field is-narrow">
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input"
                    type="text"
                    placeholder="EVIT CEO"
                    name="name"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="label-align">
            <label class="label">Job Description: </label>
          </div>
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field is-narrow">
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input"
                    type="text"
                    placeholder="Master Chief"
                    name="role"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-briefcase"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="label-align">
            <label class="label">Member Photo</label>
          </div>
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="file has-name">
                <label class="file-label">
                  <input
                    class="file-input"
                    type="file"
                    name="team_img"
                    @change="changeFileView"
                  />
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label file-label-text">
                      Choose a file…
                    </span>
                  </span>
                  <span class="file-name"></span>
                </label>
              </div>
            </div>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button class="button is-green">
                  Edit Member
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div class="columns is-multiline">
        <div
          v-for="member in team"
          :key="member._id"
          class="column is-one-fifth"
          :id="member._id"
        >
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by4">
                <img :src="data_image(member.image)" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-5">{{ member.name }}</p>
                  <hr />
                  <p class="title is-6"><b>Role:</b></p>
                  <p class="subtitle is-6">{{ member.role }}</p>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <a class="card-footer-item" @click="editToggle(member._id)"
                >Edit</a
              >
              <a class="card-footer-item" @click="deletePost(member._id)"
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
  name: "Team",
  components: {
    AdminPanel
  },
  data: function() {
    return {
      team: "",
      showEdit: false
    };
  },
  async created() {
    const token = sessionStorage.getItem("token");
    if (!token) {
      this.$router.push({ path: "/" });
    }
    this.team = await PostService.getData("team");
    // console.log(hello);
  },
  methods: {
    async deletePost(id) {
      this.team = await PostService.deleteData("team", id);
    },
    editToggle(id) {
      this.showEdit = !this.showEdit;
      document.getElementById(id).classList.toggle("highlighted");
      let id_field = document.getElementById("data_id");
      id_field.value = id;
    },
    changeFileView() {
      const file_label = document.querySelector(".file-label-text");
      const file_name = document.querySelector(".file-name");
      const file_input = document.querySelector(".file-input");

      file_label.innerHTML = "Change File";
      file_name.innerHTML = file_input.files[0].name;
    },
    data_image(image) {
      if (image != "") {
        return (
          "data:" +
          image.ContentType +
          ";base64," +
          image.image.toString("base64")
        );
      } else {
        return "";
      }
    },
    async formSubmit() {
      const form = document.querySelector(".submit-form");
      var form_data = new FormData(form);
      const file_input = document.querySelector(".file-input");
      form_data.append("team_img", file_input);
      const inputs = document.querySelectorAll(".input");
      for (let input of inputs) {
        input.value = "";
      }
      const file_label = document.querySelector(".file-label-text");
      const file_name = document.querySelector(".file-name");
      file_input.value = "";
      file_label.innerHTML = "Choose a file";
      file_name.innerHTML = "";
      this.team = await PostService.postData("team", form_data);
    }
  }
};
</script>

<style></style>
