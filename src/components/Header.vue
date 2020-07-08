<template>
  <div class="header">
    <h1>EVIT Admin Panel</h1>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  padding: 1.5rem;
  // background: linear-gradient(
  //   45deg,
  //   #ffcfc3 5%,
  //   #00cc86 50%,
  //   rgb(173, 203, 231) 95%
  // );
  background: #63b038;
}
div > h1 {
  font-size: 2rem;
  font-weight: 600;
  color: rgba(47, 40, 90, 0.8);
}
</style>
