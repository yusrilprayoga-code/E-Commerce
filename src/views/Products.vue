<template>
  <div class="products container">
    <h1>Products</h1>
    <div class="row row-cols-1 row-cols-md-4 g-4 mt-3">
      <div class="col mt-3" v-for="product in products" :key="product.id">
        <div
          class="card h-100 cardProduct"
          @click="cardRouter(product.id)"
          style="
            border-radius: 20px;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.3s ease-in-out;
          "
        >
          <img
            :src="product.thumbnail"
            class="card-img-top"
            style="border-radius: 20px; object-fit: cover; height: 200px"
            alt="Product Image"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
          </div>
        </div>
      </div>
    </div>
    <button @click="viewAllProducts" class="btn btn-primary mt-5">Show More</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Products",
  data() {
    return {
      products: [],
      category: ""
    };
  },

  mounted() {
    this.getProducts();
  },

  methods: {
    async getProducts() {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        console.log(response.data);
        this.products = response.data.products.slice(0, 8);
      } catch (error) {
        console.error(error);
      }
    },

    async viewAllProducts() {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        console.log(response.data);
        this.products = response.data.products;
      } catch (error) {
        console.error(error);
      }
    },

    cardRouter(productId) {
      this.$router.push({ name: "DetailView", params: { productId } });
    },
  },
};
</script>

<style>
.cardProduct {
  transition: all 0.2s ease-in-out;
}

.cardProduct:hover {
  transform: scale(1.05);
}
</style>
