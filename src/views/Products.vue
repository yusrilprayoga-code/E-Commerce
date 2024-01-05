<template>
  <div class="products container">
    <h1>Products</h1>
    <div class="loading" ref="loading" v-if="loading">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
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
      <div
        class="col mt-3"
        v-for="feature in features"
        :key="feature.id"
      >
        <div
          class="card h-100 cardFeature"
          @click="cardRouter2(feature.id)"
          style="border-radius: 20px"
        >
          <img
            :src="feature.image"
            class="card-img-top"
            style="border-radius: 20px"
            alt="Feature Image"
          />
          <div class="card-body">
            <h5 class="card-title">{{ feature.title.substring(0, 19) }}</h5>
          </div>
        </div>
      </div>
    </div>
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
      features: [],
      category: "",
      loading: false,
    };
  },

  mounted() {
    this.getProducts();
    this.getFeatures();
  },

  methods: {
    async getProducts() {
      try {
        this.loading = true;
        const response = await axios.get("https://dummyjson.com/products");
        console.log(response.data);
        this.products = response.data.products;
        this.loading = false;
      } catch (error) {
        console.error(error);
      }
    },

    async getFeatures() {
      try {
        this.loading = true;
        const response = await axios.get("https://fakestoreapi.com/products");
        this.features = response.data;
        this.loading = false;
        console.log(this.features);
      } catch (error) {
        this.error = error.message;
        console.error(error);
      }
    },

    cardRouter(productId) {
      this.$router.push(`/products/DetailView/${productId}`);
    },

    cardRouter2(featureId) {
      this.$router.push(`/products/DetailViews/${featureId}`);
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

.spinner-border {
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

@media (max-width: 768px) {
  .cardProduct {
    margin-bottom: 20px;
  }
}

@media (max-width: 576px) {
  .cardProduct {
    margin-bottom: 20px;
  }
}

@media (max-width: 375px) {
  .cardProduct {
    margin-bottom: 20px;
  }
}
</style>
