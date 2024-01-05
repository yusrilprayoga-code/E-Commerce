<template>
  <div class="detail-foods-category container-fluid">
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
            {{ product.title }}
          </li>
        </ol>
      </nav>

      <!-- Display the product details here -->
      <div class="row flex-md-row">
        <div class="col-md-6">
          <img :src="product.thumbnail" alt="Product Image" class="img-fluid" />
        </div>
        <div class="col-md-6">
          <h2>{{ product.title || "Product Title" }}</h2>
          <p>{{ product.description || "Product Description" }}</p>
          <p>Price: {{ product.price || "Price" }}</p>
          <!-- Add other product details as needed -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DetailView",
  props: ["productId"],
  data() {
    return {
      product: [],
    };
  },
  mounted() {
    this.getProductDetails();
  },
  methods: {
    async getProductDetails() {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${this.productId}`);
        console.log(response.data);
        this.product = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style></style>
