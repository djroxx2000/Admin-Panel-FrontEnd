import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/users",
    name: "Users",
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/Users.vue")
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: () =>
      import(/* webpackChunkName: "testimonials" */ "../views/Testimonials.vue")
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/Products.vue")
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () =>
      import(/* webpackChunkName: "blogs" */ "../views/Blogs.vue")
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import(/* webpackChunkName: "gallery" */ "../views/Gallery.vue")
  },
  {
    path: "/team",
    name: "Team",
    component: () => import(/* webpackChunkName: "team" */ "../views/Team.vue")
  },
  {
    path: "/pagedata",
    name: "PageData",
    component: () =>
      import(/* webpackChunkName: "pagedata" */ "../views/PageData.vue")
  }
  // {
  //   path: "/index",
  //   name: "Index",
  //   component: () =>
  //     import(/* webpackChunkName: "index" */ "../views/Index.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
