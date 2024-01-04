<template>
  <div class="footer mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h3 class="footer-title">E-Commerce</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>
        <div class="col-md-3">
          <h3 class="footer-title">Catalog</h3>
          <ul class="footer-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/features">Features</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h3 class="footer-title">About Us</h3>
          <ul class="footer-links">
            <li><router-link to="/">Our Producers</router-link></li>
            <li><router-link to="/">Sitemap</router-link></li>
            <li><router-link to="/">FAQ</router-link></li>
            <li><router-link to="/">About Us</router-link></li>
            <li><router-link to="/">Terms & Conditions</router-link></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h3 class="footer-title">Follow Us</h3>
          <ul class="footer-links">
            <li><router-link to="/">Facebook</router-link></li>
            <li><router-link to="/">Twitter</router-link></li>
            <li><router-link to="/">Instagram</router-link></li>
            <li><router-link to="/">Youtube</router-link></li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p>
            <small>&copy; 2024 E-Commerce. All rights reserved.</small>
          </p>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <p class="text-end">
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  data() {
    return {
      title: "Footer",
    };
  },
};
</script>

<style>
.footer {
  background-color: #333;
  color: #fff;
  padding: 50px 0;
  text-align: left;
}

.footer-title {
  color: #ffa500; /* Orange color for titles */
}

.footer p {
  color: #ccc;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
}

.footer-links a:hover {
  color: #ffa500; /* Orange color on hover */
}
</style>
