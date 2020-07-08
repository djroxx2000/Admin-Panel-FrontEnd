<template>
  <div class="products">
    <AdminPanel />
    <div class="page-content">
      <form @submit.prevent="formSubmit" v-if="!showEdit" class="submit-form">
        <div class="label-align">
          <label class="label">Product Details: </label>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-narrow">
              <p class="control is-expanded has-icons-left">
                <input
                  class="input"
                  type="text"
                  placeholder="Product Name"
                  name="name"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-bolt"></i>
                </span>
              </p>
            </div>
            <div class="field is-narrow">
              <p class="control is-expanded has-icons-left">
                <input
                  class="input"
                  type="number"
                  placeholder="Actual Price"
                  name="actual_price"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-coins"></i>
                </span>
              </p>
            </div>
            <div class="field is-narrow">
              <p class="control is-expanded has-icons-left">
                <input
                  class="input"
                  type="number"
                  placeholder="Sale Price"
                  name="sale_price"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-coins"></i>
                </span>
              </p>
            </div>
            <div class="field is-narrow">
              <p class="control is-expanded has-icons-left">
                <input
                  class="input"
                  type="number"
                  placeholder="Rating"
                  name="rating"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-star"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="label-align">
          <label class="label">Tags(Categories): </label>
        </div>
        <div class="field is-horizontal">
          <div class="field-body" id="tag-target">
            <div class="field is-narrow">
              <p class="control is-expanded has-icons-left">
                <input
                  class="input"
                  type="text"
                  placeholder="Tag"
                  name="tags[]"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-tags"></i>
                </span>
              </p>
            </div>
          </div>
          <div class="control">
            <button class="button is-green" v-on:click.prevent="lessTag()">
              -
            </button>
          </div>
          <div class="control">
            <button class="button is-green" v-on:click.prevent="newTag()">
              +
            </button>
          </div>
        </div>
        <div class="label-align">
          <label class="label">Product Description: </label>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <textarea
                class="textarea"
                placeholder="e.g. EVIT makes the best products"
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
                  name="product_img"
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
                Add New Product
              </button>
            </div>
          </div>
        </div>
      </form>

      <form class="submit-form" @submit.prevent="formSubmit">
        <input type="text" name="id" id="data_id" style="display: none" />
        <div class="edit-form" v-if="showEdit">
          <div class="label-align">
            <label class="label">Edit Selected Product: </label>
          </div>
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field is-narrow">
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input"
                    type="text"
                    placeholder="Product Name"
                    name="name"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-bolt"></i>
                  </span>
                </p>
              </div>
              <div class="field is-narrow">
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input"
                    type="number"
                    placeholder="Actual Price"
                    name="actual_price"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-coins"></i>
                  </span>
                </p>
              </div>
              <div class="field is-narrow">
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input"
                    type="number"
                    placeholder="Sale Price"
                    name="sale_price"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-coins"></i>
                  </span>
                </p>
              </div>
              <div class="field is-narrow">
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input"
                    type="number"
                    placeholder="Rating"
                    name="rating"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-star"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="label-align">
            <label class="label">Replace Tags: </label>
          </div>
          <div class="field is-horizontal">
            <div class="field-body" id="tag-target">
              <div class="field is-narrow">
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input"
                    type="text"
                    placeholder="Tag"
                    name="tags[]"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-tags"></i>
                  </span>
                </p>
              </div>
              <div class="control">
                <button class="button is-green" v-on:click.prevent="lessTag()">
                  -
                </button>
              </div>
              <div class="control">
                <button class="button is-green" v-on:click.prevent="newTag()">
                  +
                </button>
              </div>
            </div>
          </div>
          <div class="label-align">
            <label class="label">Product Description: </label>
          </div>
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <textarea
                  class="textarea"
                  placeholder="e.g. EVIT makes the best products"
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
                    name="product_img"
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
                  Edit Selected Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div class="columns is-multiline">
        <div
          v-for="product in products"
          :key="product._id"
          class="column is-one-third"
          :id="product._id"
        >
          <div class="card">
            <!-- <div class="card-image">
              <figure class="image is-4by4">
                <img
                  :src="data_image(product._id)"
                  alt="Placeholder image"
                />
              </figure>
            </div> -->
            <div class="card-content">
              <div class="content">
                <p class="title is-5">{{ product.name }}</p>
                <hr />
              </div>
              <div class="media">
                <div class="media-content">
                  <p class="subtitle is-6">
                    <b>Actual Price:</b> Rs. {{ product.actual_price }}
                  </p>
                  <p class="subtitle is-6">
                    <b>Sale Price:</b> Rs. {{ product.sale_price }}
                  </p>
                  <p class="subtitle is-6">
                    <b>Rating:</b> {{ product.rating }}
                    <i class="fas fa-star"></i>
                  </p>
                </div>
                <div class="media-right">
                  <figure class="image is-128x128">
                    <img
                      :src="data_image(product.image)"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
              </div>
              <div class="content">
                <p class="subtitle is-6">
                  <b>Tags:</b> {{ tagList(product.tags) }}
                </p>
                <hr />
                <p class="subtitle is-6"><b>Description:</b></p>
                <p class="subtitle is-6">{{ product.description }}</p>
              </div>
            </div>
            <footer class="card-footer">
              <a class="card-footer-item" @click="editToggle(product._id)"
                >Edit</a
              >
              <a class="card-footer-item" v-on:click="deletePost(product._id)"
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
  name: "Products",
  components: {
    AdminPanel
  },
  data: function() {
    return {
      products: "",
      name: "",
      edit_name: "",
      description: "",
      edit_description: "",
      showEdit: false
    };
  },
  async created() {
    const token = sessionStorage.getItem("token");
    if (!token) {
      this.$router.push({ path: "/" });
    }
    this.products = await PostService.getData("products");
  },
  methods: {
    async deletePost(id) {
      this.products = await PostService.deleteData("products", id);
    },
    newTag() {
      const tag_in = document.getElementById("tag-target");
      tag_in.innerHTML += `
        <div class="field is-narrow">
            <p class="control is-expanded has-icons-left">
              <input
                class="input"
                type="text"
                placeholder="Tag"
                name="tags[]"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-tags"></i>
              </span>
            </p>
          </div>
      `;
    },
    lessTag() {
      const tag_in = document.getElementById("tag-target");
      tag_in.removeChild(tag_in.lastElementChild);
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
    tagList(tags) {
      return tags.join(", ");
    },
    async formSubmit() {
      const form = document.querySelector(".submit-form");
      var form_data = new FormData(form);
      const file_input = document.querySelector(".file-input");
      form_data.append("product_img", file_input);
      const file_label = document.querySelector(".file-label-text");
      const file_name = document.querySelector(".file-name");
      form.reset();
      file_label.innerHTML = "Choose a file";
      file_name.innerHTML = "";
      this.products = await PostService.postData("products", form_data);
    }
  }
};
</script>

<style></style>
