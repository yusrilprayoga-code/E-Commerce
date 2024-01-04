<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1 class="about contact">Contact</h1>
  <div class="container">
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <label for="floatingPassword">Password</label>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
  data() {
    return {
      title: "Contact",
    };
  },
};
</script>

<style>
    .form-float{
        width: 50%;
    }
</style>
