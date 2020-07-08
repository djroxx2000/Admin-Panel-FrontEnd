<template>
  <div class="page-data">
    <AdminPanel />
    <div class="page-form-container">
      <div class="label-align">
        <label for="" class="label">Multiple Pages Data: </label>
      </div>
      <br />
      <form @submit.prevent="multiPageSubmit" class="multi-page-form">
        <label for="" class="label">Company Advantages: </label>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <textarea
                class="textarea"
                placeholder="Title 1: Advantage 1 + Title2: Advantage 2 + Title3: Advantage 3"
                name="index_adv_left"
                id="index-adv-left"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <textarea
                class="textarea"
                placeholder="Title 4: Advantage 4 + Title 5: Advantage 5 + Title 6: Advantage 6"
                name="index_adv_right"
                id="index-adv-right"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="label-align">
          <label for="" class="label">Footer Details: </label>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Footer Address"
                name="footer_address"
                id="footer_address"
              />
            </div>
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Footer Contact Number"
                name="footer_number"
                id="footer_number"
              />
            </div>
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Footer Email"
                name="footer_email"
                id="footer_email"
              />
            </div>
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Footer Company Name"
                name="footer_name"
                id="footer_name"
              />
            </div>
          </div>
        </div>
        <div class="label">
          <label for="" class="label">Social Media Links:</label>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Facebook Link"
                name="fb_link"
                id="fb_link"
              />
            </div>
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Twitter Link"
                name="twitter_link"
                id="twitter_link"
              />
            </div>
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="LinkedIn Link"
                name="linked_link"
                id="linked_link"
              />
            </div>
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Instagram Link"
                name="insta_link"
                id="insta_link"
              />
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <label class="label label-align">Header Logo</label>
            <div class="field is-narrow">
              <input type="file" class="input" name="header_img" />
            </div>
            <label class="label label-align">Footer Logo</label>
            <div class="field is-narrow">
              <input type="file" class="input" name="footer_img" />
            </div>
            <label class="label label-align">Favicon</label>
            <div class="field is-narrow">
              <input type="file" class="input" name="favicon" />
            </div>
          </div>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-green">
                Update Data
              </button>
            </div>
          </div>
        </div>
      </form>
      <br />
      <hr />
      <form @submit.prevent="indexSubmit" class="index-form">
        <div class="label-align">
          <label class="label">Index Page Data: </label>
        </div>
        <br />
        <div class="label-align">
          <label class="label">Index Page Section 1: </label>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <input
                class="input"
                placeholder="Index Page Top Title h1 (Green)"
                name="index_top_h1_green"
                id="index-top-h1-green"
              />
            </div>
            <div class="field">
              <input
                class="input"
                placeholder="Index Page Top Title h2 (Black)"
                name="index_top_h2_black"
                id="index-top-h2-black"
              />
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <textarea
                class="textarea"
                placeholder="Index Page Top Paragraph"
                name="index_top_para"
                id="index-top-para"
                rows="2"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-narrow">
              <input
                type="text"
                class="input"
                name="index_top_btn"
                id="index-top-btn"
                placeholder="Button text"
              />
            </div>
            <div class="field">
              <input
                type="text"
                class="input"
                name="index_top_btn_link"
                id="index-top-btn-link"
                placeholder="Button Link"
              />
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <label class="label label-align">Header Car Image:</label>
            <div class="field is-narrow">
              <input type="file" class="input" name="header_img" />
            </div>
          </div>
        </div>
        <div class="label-align">
          <label for="" class="label">Index Page Section 2:</label>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <textarea
                class="textarea"
                placeholder="Index Page Blog Carousel Description"
                name="index_blog_para"
                id="index-blog-para"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="label-align">
          <label for="" class="label">Index Page Section 3:</label>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-narrow">
              <input
                type="text"
                class="input"
                placeholder="Level 1 Title"
                name="index_l1_title"
                id="index_l1_title"
              />
            </div>
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Level 1 Para"
                name="index_l1_para"
                id="index_l1_para"
              />
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-narrow">
              <input
                type="text"
                class="input"
                placeholder="Level 2 Title"
                name="index_l2_title"
                id="index_l2_title"
              />
            </div>
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Level 2 Para"
                name="index_l2_para"
                id="index_l2_para"
              />
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-narrow">
              <input
                type="text"
                class="input"
                placeholder="Level 3 Title"
                name="index_l3_title"
                id="index_l3_title"
              />
            </div>
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Level 3 Para"
                name="index_l3_para"
                id="index_l3_para"
              />
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-narrow">
              <input
                type="text"
                class="input"
                placeholder="Level 4 Title"
                name="index_l4_title"
                id="index_l4_title"
              />
            </div>
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Level 4 Para"
                name="index_l4_para"
                id="index_l4_para"
              />
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <input type="file" class="input" multiple name="level_img" />
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <label class="label label-align">Advantages Image:</label>
            <div class="field is-narrow">
              <input type="file" class="input" name="charger_img" />
            </div>
          </div>
        </div>
        <div class="label-align">
          <label for="" class="label">Index Page Section 4:</label>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Charging Card Title Left"
                name="index_charging_title_l"
                id="index-charging-title-l"
              />
            </div>
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Charging Card Title Right"
                name="index_charging_title_r"
                id="index-charging-title-r"
              />
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Charging Card Subtitle Left"
                name="index_charging_subtitle_l"
                id="index-charging-sub-l"
              />
            </div>
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Charging Card Subtitle Right"
                name="index_charging_subtitle_r"
                id="index-charging-sub-r"
              />
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Charging Card Para Left"
                name="index_charging_para_l"
                id="index-charging-para-l"
              />
            </div>
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Charging Card Para Right"
                name="index_charging_para_r"
                id="index-charging-para-r"
              />
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Charging Card Title Beside Image"
                name="index_charging_title"
                id="index-charging-title"
              />
            </div>
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Charging Card Subtitle Beside Image"
                name="index_charging_subtitle"
                id="index-charging-sub"
              />
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <textarea
                class="textarea"
                placeholder="Charging Card Para Beside Image"
                name="index_charging_para"
                id="index-charging-para"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-narrow">
              <input
                type="text"
                class="input"
                name="index_charging_btn"
                id="index-charging-btn"
                placeholder="Charging Card Button text"
              />
            </div>
            <div class="field">
              <input
                type="text"
                class="input"
                name="index_charging_btn_link"
                id="index-charging-btn-link"
                placeholder="Charging Card Button Link"
              />
            </div>
          </div>
        </div>
        <label class="label label-align">Charging Card Image</label>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-narrow">
              <input type="file" class="input index-img" name="index_img" />
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="label-align">
            <label for="" class="label">Index Page Section 5: </label>
          </div>
          <!-- <div class="control">
            <button class="button is-green" v-on:click.prevent="lessCost()">
              -
            </button>
          </div>
          <div class="control">
            <button class="button is-green" v-on:click.prevent="moreCost()">
              +
            </button>
          </div> -->
        </div>
        <label for="" class="label">Home</label>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <textarea
                name="index_cost_features[]"
                id="index-cost-f1"
                class="textarea"
                rows="2"
                placeholder="Feature 1 + Feature 2 + Feature 3 ..."
              ></textarea>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-narrow">
              <input
                type="number"
                placeholder="Cost"
                class="input"
                name="index_cost[]"
                id="index-cost-1"
              />
            </div>
            <div class="field">
              <input
                type="text"
                placeholder="Home Charging Link"
                class="input"
                name="index_cost_link[]"
                id="index-cost-1-link"
              />
            </div>
          </div>
        </div>
        <label for="" class="label">Public Points</label>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <textarea
                name="index_cost_features[]"
                id="index-cost-f2"
                class="textarea"
                rows="2"
                placeholder="Feature 1 + Feature 2 + Feature 3 ..."
              ></textarea>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-narrow">
              <input
                type="number"
                placeholder="Cost"
                class="input"
                name="index_cost[]"
                id="index-cost-2"
              />
            </div>
            <div class="field">
              <input
                type="text"
                placeholder="Public Charging Link"
                class="input"
                name="index_cost_link[]"
                id="index-cost-2-link"
              />
            </div>
          </div>
        </div>
        <label for="" class="label">Commercial</label>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <textarea
                name="index_cost_features[]"
                id="index-cost-f3"
                class="textarea"
                rows="2"
                placeholder="Feature 1 + Feature 2 + Feature 3 ..."
              ></textarea>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-narrow">
              <input
                type="number"
                placeholder="Cost"
                class="input"
                name="index_cost[]"
                id="index-cost-3"
              />
            </div>
            <div class="field">
              <input
                type="text"
                placeholder="Commercial Charging Link"
                class="input"
                name="index_cost_link[]"
                id="index-cost-3-link"
              />
            </div>
          </div>
        </div>
        <div class="label-align">
          <label for="" class="label">Index Page Section 6: </label>
        </div>
        <label class="label label-align">App Store Image:</label>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-narrow">
              <input type="file" class="input index-img" name="index_img" />
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Title beside phone"
                name="index_phone_title"
                id="index-phone-title"
              />
            </div>
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Play Store Link"
                name="index_phone_play_store"
                id="play_store_link"
              />
            </div>
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Apple App Store Link"
                name="index_phone_app_store"
                id="app_store_link"
              />
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <textarea
                name="index_phone_para"
                id="index-phone-para"
                class="textarea"
                rows="2"
                placeholder="Para beside phone"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-green">
                Update index elements
              </button>
            </div>
          </div>
        </div>
      </form>
      <br />
      <hr />
      <form @submit.prevent="aboutSubmit" class="about-form">
        <div class="label-align">
          <label for="" class="label"> About Page Details: </label>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-narrow">
              <input
                type="text"
                class="input"
                placeholder="About Title"
                name="about_title"
                id="about_t"
              />
            </div>
            <div class="field">
              <textarea
                name="about_para"
                id="about_p"
                class="textarea"
                rows="2"
                placeholder="About Page Paragraph"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-narrow">
              <input
                type="text"
                class="input"
                placeholder="About Title Founders Message"
                name="about_title2"
                id="about_t2"
              />
            </div>
            <div class="field">
              <textarea
                name="about_para2"
                id="about_p2"
                class="textarea"
                rows="2"
                placeholder="About Page Founders Message"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-narrow">
              <input
                type="text"
                class="input"
                placeholder="About Title Mission"
                name="about_title3"
                id="about_t3"
              />
            </div>
            <div class="field">
              <textarea
                name="about_para3"
                id="about_p3"
                class="textarea"
                rows="2"
                placeholder="About Page Mission"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field is-narrow">
              <input
                type="text"
                class="input"
                placeholder="About Button text"
                name="about_btn"
                id="about_btn"
              />
            </div>
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="About Button Link"
                name="about_btn_link"
                id="about_btn_link"
              />
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <label class="label label-align">About Image:&nbsp; </label>
            <div class="field is-narrow">
              <input type="file" class="input about-img" name="about_img" />
            </div>
          </div>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-green">
                Update About Details
              </button>
            </div>
          </div>
        </div>
      </form>
      <br />
      <hr />
      <form class="partner-form" @submit.prevent="partnerSubmit">
        <input type="text" name="id" id="partner-id" hidden />
        <div class="label-align">
          <label class="label">Partner Logos: </label>
        </div>
        <div class="field is-horizontal">
          <div class="field-body" id="partner-logo-target">
            <div class="field is-narrow">
              <input
                type="file"
                class="input"
                id="partner-img"
                name="partner_img"
                multiple
              />
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="label">
              <label for="" class="label label-align"
                >Partner Logos Text:</label
              >
            </div>
            <div class="field">
              <input
                type="text"
                class="input"
                placeholder="Partner Logos Text"
                name="partner_p"
              />
            </div>
          </div>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-green">
                Update Partner Logos
              </button>
            </div>
          </div>
        </div>
      </form>
      <br />
      <hr />
      <!-- <form @submit.prevent="faqSubmit" class="faq-form">
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="label-align">
              <label for="" class="label">FAQ Page: </label>
            </div>
            <div class="control">
              <button class="button is-green" v-on:click.prevent="lessFaq()">
                -
              </button>
            </div>
            <div class="control">
              <button class="button is-green" v-on:click.prevent="moreFaq()">
                +
              </button>
            </div>
          </div>
        </div>
        <br />
        <div class="faq-container">
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <input
                  type="text"
                  class="input"
                  name="faq_q[]"
                  placeholder="Question?"
                />
              </div>
              <div class="field">
                <textarea
                  name="faq_ans[]"
                  rows="2"
                  class="textarea"
                  placeholder="Answer"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-green">
                Replace FAQs
              </button>
            </div>
          </div>
        </div>
      </form> -->
      <!-- <br /> -->
      <!-- <hr /> -->
    </div>
  </div>
</template>

<script>
import PostService from "../adminService";
import AdminPanel from "../components/AdminPanel";

export default {
  name: "PageData",
  components: {
    AdminPanel
  },
  async created() {
    const token = sessionStorage.getItem("token");
    if (!token) {
      this.$router.push({ path: "/" });
    }
    let res = await PostService.getData("partner_data");
    const p_id = document.getElementById("partner-id");
    p_id.value = res[0]._id;
    res = await PostService.getData("index_data");
    let index_fields = res[0];
    res = await PostService.getData("multi_data");
    let multi_fields = res[0];
    res = await PostService.getData("about_data");
    let about_fields = res[0];
    // res = await PostService.getData("faq_data");
    // let faq_fields = res[0];
    document.getElementById("index-top-h1-green").value =
      index_fields.index_top_h1_green;
    document.getElementById("index-top-h2-black").value =
      index_fields.index_top_h2_black;
    document.getElementById("index-top-para").value =
      index_fields.index_top_para;
    document.getElementById("index-top-btn").value = index_fields.index_top_btn;
    document.getElementById("index-top-btn-link").value =
      index_fields.index_top_btn_link;
    document.getElementById("index-blog-para").value =
      index_fields.index_blog_para;
    document.getElementById("index_l1_title").value =
      index_fields.index_l1_title;
    document.getElementById("index_l2_title").value =
      index_fields.index_l2_title;
    document.getElementById("index_l3_title").value =
      index_fields.index_l3_title;
    document.getElementById("index_l4_title").value =
      index_fields.index_l4_title;
    document.getElementById("index_l1_para").value = index_fields.index_l1_para;
    document.getElementById("index_l2_para").value = index_fields.index_l2_para;
    document.getElementById("index_l3_para").value = index_fields.index_l3_para;
    document.getElementById("index_l4_para").value = index_fields.index_l4_para;
    document.getElementById("index-charging-title-l").value =
      index_fields.index_charging_title_l;
    document.getElementById("index-charging-sub-l").value =
      index_fields.index_charging_subtitle_l;
    document.getElementById("index-charging-para-l").value =
      index_fields.index_charging_para_l;
    document.getElementById("index-charging-title-r").value =
      index_fields.index_charging_title_r;
    document.getElementById("index-charging-sub-r").value =
      index_fields.index_charging_subtitle_r;
    document.getElementById("index-charging-para-r").value =
      index_fields.index_charging_para_r;
    document.getElementById("index-charging-title").value =
      index_fields.index_charging_title;
    document.getElementById("index-charging-sub").value =
      index_fields.index_charging_subtitle;
    document.getElementById("index-charging-para").value =
      index_fields.index_charging_para;
    document.getElementById("index-charging-btn").value =
      index_fields.index_charging_btn;
    document.getElementById("index-charging-btn-link").value =
      index_fields.index_charging_btn_link;
    document.getElementById("index-cost-1").value = index_fields.index_cost[0];
    document.getElementById("index-cost-2").value = index_fields.index_cost[1];
    document.getElementById("index-cost-3").value = index_fields.index_cost[2];
    document.getElementById("index-cost-1-link").value =
      index_fields.index_cost_link[0];
    document.getElementById("index-cost-2-link").value =
      index_fields.index_cost_link[1];
    document.getElementById("index-cost-3-link").value =
      index_fields.index_cost_link[2];
    document.getElementById("index-cost-f1").value =
      index_fields.index_cost_features[0];
    document.getElementById("index-cost-f2").value =
      index_fields.index_cost_features[1];
    document.getElementById("index-cost-f3").value =
      index_fields.index_cost_features[2];
    document.getElementById("index-phone-title").value =
      index_fields.index_phone_title;
    document.getElementById("index-phone-para").value =
      index_fields.index_phone_para;
    document.getElementById("play_store_link").value =
      index_fields.index_phone_play_store;
    document.getElementById("app_store_link").value =
      index_fields.index_phone_app_store;
    document.getElementById("fb_link").value = multi_fields.fb_link;
    document.getElementById("insta_link").value = multi_fields.insta_link;
    document.getElementById("linked_link").value = multi_fields.linked_link;
    document.getElementById("twitter_link").value = multi_fields.twitter_link;
    document.getElementById("index-adv-left").value =
      multi_fields.index_adv_left;
    document.getElementById("index-adv-right").value =
      multi_fields.index_adv_right;
    document.getElementById("footer_address").value =
      multi_fields.footer_address;
    document.getElementById("footer_email").value = multi_fields.footer_email;
    document.getElementById("footer_number").value = multi_fields.footer_number;
    document.getElementById("footer_name").value = multi_fields.footer_name;
    document.getElementById("about_t").value = about_fields.about_title;
    document.getElementById("about_p").value = about_fields.about_para;
    document.getElementById("about_t2").value = about_fields.about_title2;
    document.getElementById("about_p2").value = about_fields.about_para2;
    document.getElementById("about_t3").value = about_fields.about_title3;
    document.getElementById("about_p3").value = about_fields.about_para3;
    document.getElementById("about_btn").value = about_fields.about_btn;
    document.getElementById("about_btn_link").value =
      about_fields.about_btn_link;
    // const faqs = document.querySelector(".faq-container");
    // faqs.innerHTML = "";
    // for (let i = 0; i < faq_fields.faq_q.length; i++) {
    //   faqs.innerHTML += `
    //     <div class="field is-horizontal">
    //       <div class="field-body">
    //         <div class="field">
    //           <input
    //             type="text"
    //             class="input"
    //             name="faq_q"
    //             placeholder="Question?"
    //             value="${faq_fields.faq_q[i]}"
    //           />
    //         </div>
    //         <div class="field">
    //           <textarea
    //             name="faq_ans"
    //             rows="2"
    //             class="textarea"
    //             placeholder="Answer"
    //           >${faq_fields.faq_ans[i]}</textarea>
    //         </div>
    //       </div>
    //     </div>
    //   `;
    // }
  },
  methods: {
    async indexSubmit() {
      const form = document.querySelector(".index-form");
      let form_data = new FormData(form);
      await PostService.postDataNoRes("index_data", form_data);
    },
    async partnerSubmit() {
      const form = document.querySelector(".partner-form");
      let form_data = new FormData(form);
      await PostService.postDataNoRes("partner_data", form_data);
    },
    async multiPageSubmit() {
      const form = document.querySelector(".multi-page-form");
      let form_data = new FormData(form);
      await PostService.postDataNoRes("multi_data", form_data);
    },
    async aboutSubmit() {
      const form = document.querySelector(".about-form");
      let form_data = new FormData(form);
      await PostService.postDataNoRes("about_data", form_data);
    }
    // async faqSubmit() {
    //   const form = document.querySelector(".faq-form");
    //   let form_data = new FormData(form);
    //   await PostService.postDataNoRes("faq_data", form_data);
    // },
    // moreFaq() {
    //   const faq_div = document.querySelector(".faq-container");
    //   faq_div.innerHTML += `
    //     <div class="field is-horizontal">
    //       <div class="field-body">
    //         <div class="field">
    //           <input
    //             type="text"
    //             class="input"
    //             name="faq_q"
    //             placeholder="Question?"
    //           />
    //         </div>
    //         <div class="field">
    //           <textarea
    //             name="faq_ans"
    //             rows="2"
    //             class="textarea"
    //             placeholder="Answer"
    //           ></textarea>
    //         </div>
    //       </div>
    //     </div>
    //   `;
    // },
    // lessFaq() {
    //   const faq_div = document.querySelector(".faq-container");
    //   faq_div.removeChild(faq_div.lastElementChild);
    // }
  }
};
</script>

<style lang="scss" scoped>
.page-form-container {
  margin: 1.2rem;
}

hr {
  height: 0.2rem;
  background: #63b038;
}
</style>
