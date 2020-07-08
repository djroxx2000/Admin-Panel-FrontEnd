<template>
  <div class="login">
    <Header />
    <LoginForm />
  </div>
</template>

<script>
import Header from "./Header";
import LoginForm from "./LoginForm";
export default {
  name: "LoginPage",
  components: {
    Header,
    LoginForm
  }
};
</script>

<style></style>
