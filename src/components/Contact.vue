<template>
  <div class="contact-container">
    <h1 class="contact-title mb-5">Contact</h1>
    <div class="form-container">
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          required
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          required
        />
        <label for="floatingPassword">Password</label>
      </div>
      <div class="form-floating mt-3">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style="height: 100px"
          required
        ></textarea>
        <label for="floatingTextarea2">Comments</label>
      </div>
      <div class="d-grid mt-3 mb-5">
        <button class="btn btn-primary" type="button">Button</button>
      </div>
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
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form-container {
  width: 50%;
}
</style>
