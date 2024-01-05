<template>
  <div class="detail-view container">
    <h1>Detail View</h1>
    <div class="card">
      <div class="card-body">
        <img :src="product.thumbnail" alt="Product Image" />
        <div class="card-title">
          <h3>{{ product.title }}</h3>
        </div>
        <div class="card-text">
          <p>{{ product.description }}</p>
        </div>
        <div class="card-text">
          <p>{{ product.price }}</p>
        </div>
        <div class="card-text">
          <p>{{ product.category }}</p>
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
      product: {},
    };
  },
  mounted() {
    this.getProductDetails();
  },
  methods: {
    async getProductDetails() {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${this.productId}`
        );
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
