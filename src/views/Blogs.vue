<template>
  <div class="blogs">
    <AdminPanel />

    <div class="page-content">
      <form class="submit-form" v-if="!showEdit" @submit.prevent="formSubmit">
        <div class="label-align">
          <label class="label">Blog Title: </label>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-narrow">
              <p class="control is-expanded has-icons-left">
                <input
                  class="input"
                  type="text"
                  placeholder="Blog Title"
                  name="title"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-pen"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="label-align">
          <label class="label">Blog Description: </label>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <textarea
                class="textarea"
                placeholder="e.g. EVIT is just the best"
                name="description"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="file has-name">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name="blog_img"
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
                Post new blog
              </button>
            </div>
          </div>
        </div>
      </form>

      <form class="submit-form" @submit.prevent="formSubmit">
        <input type="text" name="id" id="data_id" style="display: none" />
        <div class="edit-form" v-if="showEdit">
          <div class="label-align">
            <label class="label">Edit Selected Blog: </label>
          </div>
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field is-narrow">
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input"
                    type="text"
                    placeholder="Blog Title"
                    name="title"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-pen"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="label-align">
            <label class="label">Blog Description: </label>
          </div>
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <textarea
                  class="textarea"
                  placeholder="e.g. EVIT is just the best"
                  name="description"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="file has-name">
                <label class="file-label">
                  <input
                    class="file-input"
                    type="file"
                    name="blog_img"
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
                  Edit blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div class="columns is-multiline">
        <div
          v-for="blog in blogs"
          :key="blog._id"
          class="column is-one-third"
          :id="blog._id"
        >
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by4">
                <img :src="data_image(blog.image)" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-5">{{ blog.title }}</p>
                  <hr />
                  <p class="title is-6"><b>Description:</b></p>
                  <p class="subtitle is-6">{{ blog.description }}</p>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <a class="card-footer-item" @click="editToggle(blog._id)">Edit</a>
              <a class="card-footer-item" @click="deletePost(blog._id)"
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
  name: "Blogs",
  components: {
    AdminPanel
  },
  data: function() {
    return {
      blogs: "",
      showEdit: false
    };
  },
  async created() {
    const token = sessionStorage.getItem("token");
    if (!token) {
      this.$router.push({ path: "/" });
    }
    this.blogs = await PostService.getData("blogs");
    // console.log(hello);
  },
  methods: {
    async deletePost(id) {
      this.blogs = await PostService.deleteData("blogs", id);
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
      form_data.append("blog_img", file_input);
      const inputs = document.querySelectorAll(".input");
      for (let input of inputs) {
        input.value = "";
      }
      const textareas = document.querySelectorAll(".textarea");
      for (let textarea of textareas) {
        textarea.value = "";
      }
      const file_label = document.querySelector(".file-label-text");
      const file_name = document.querySelector(".file-name");
      file_input.value = "";
      file_label.innerHTML = "Choose a file";
      file_name.innerHTML = "";
      this.blogs = await PostService.postData("blogs", form_data);
    }
  }
};
</script>

<style></style>
