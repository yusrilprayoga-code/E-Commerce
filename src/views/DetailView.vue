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
            {{ product.title }}
          </li>
        </ol>
      </nav>

      <!-- Display the product details here -->
      <div class="loading" v-if="loading">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div class="row flex-md-row">
        <div class="col-md-6">
          <img
            :src="product.thumbnail"
            alt="Product Image"
            class="img-fluid img-thumbnail"
          />
          <div class="row mt-3">
            <div
              class="col-md-4"
              v-for="image in product.images"
              :key="image.id"
            >
              <img
                :src="image"
                alt="Product Image"
                class="img-fluid productimage"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6" style="text-align: left;">
          <h2>{{ product.title || "Product Title" }}</h2>
          <p>{{ product.description || "Product Description" }}</p>
          <p>Price: {{ product.price || "Price" }}$</p>
          <p>
            Rating:
            {{ product.rating || "Rating" }}
          </p>
          <p>Brand : {{ product.brand }}</p>
          <p>Category: {{ product.category || "Category" }}</p>
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
      image: [],
      loading: false,
    };
  },
  mounted() {
    this.getProductDetails();
  },
  methods: {
    async getProductDetails() {
      try {
        this.loading = true;
        const response = await axios.get(
          `https://dummyjson.com/products/${this.productId}`
        );
        console.log(response.data);
        this.product = response.data;
        this.loading = false;
      } catch (error) {
        console.error(error);
      }
    },
  },
  
};
</script>

<style>
.img-thumbnail {
  border-radius: 20px;
  object-fit: cover;
  height: 500px;
}

.productimage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  border-radius: 20px;
  margin-top: 10px;
}

.productimage:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}

.detail-product {
  margin-top: 3rem;
}
</style>
