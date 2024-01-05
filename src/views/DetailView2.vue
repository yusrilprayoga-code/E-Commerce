<template>
  <div class="detail-product container-fluid">
    <div class="container mt-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item mt-3 mb-3">
            <router-link to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item mt-3 mb-3" aria-current="page">
            <router-link to="/products">Product</router-link>
          </li>
          <li class="breadcrumb-item mt-3 mb-3 active" aria-current="page">
            {{ feature.title }}
          </li>
        </ol>
      </nav>

      <!-- Display the product details here -->
      <div class="loading" v-if="loading">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div class="row flex-md-row mt-3">
        <div class="col-md-6">
          <img
            :src="feature.image"
            alt="Product Image"
            class="img-fluid img-thumbnail"
          />
        </div>
        <div class="col-md-6">
          <h2>{{ feature.title || "Product Title" }}</h2>
          <p>{{ feature.description || "Product Description" }}</p>
          <p>Price: {{ feature.price || "Price" }}$</p>
          <p>Category : {{ feature.category }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DetailViews",
  props: ["featureId"],
  data() {
    return {
      feature: [],
      loading: false,
    };
  },
  methods: {
    async getFeature() {
      try {
        this.loading = true;
        const response = await axios.get(
          `https://fakestoreapi.com/products/${this.featureId}`
        );
        console.log(response.data);
        this.feature = response.data;
        this.loading = false;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getFeature();
  },
};
</script>

<style>
</style>
