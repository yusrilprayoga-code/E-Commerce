<template>
  <div class="Features container">
    <h2 class="mt-5 text-center mb-5">Features</h2>
    <div class="row row-cols-md-4 mt-5">
      <div class="col mt-3" v-for="(category, index) in categories" :key="index">
        <div class="card h-100 cardCategory" @click="selectCategory(category)" style="border-radius: 20px; cursor: pointer;">
          <div class="card-body">
            <h5 class="card-title">
              {{ category }}
            </h5>
          </div>
          </div>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-4 mt-5">
      <div v-if="loading" class="loading text-center align-items-center justify-content-center">
        <b-spinner></b-spinner>
      </div>
      <div v-if="error" class="error">{{ error }}</div>
      <div class="col mt-3" v-for="(feature, index) in filteredFeatures" :key="index">
        <div class="card h-100 cardFeature" @click="cardRouter" style="border-radius: 20px;">
          <img :src="feature.image" class="card-img-top" style="border-radius: 20px;" alt="Feature Image" />
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
  name: "Features",
  data() {
    return {
      features: [],
      categories: [],
      selectedCategory: null,
      loading: true,
      error: null,
    };
  },

  computed: {
    filteredFeatures() {
      if (!this.selectedCategory) {
        return this.features;
      }
      return this.features.filter((feature) => feature.category === this.selectedCategory);
    },
  },

  mounted() {
    this.getFeatures();
    this.getCategories();
  },

  methods: {
    async getFeatures() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        this.features = response.data;
        this.loading = false;
        console.log(this.features);
      } catch (error) {
        this.error = error.message;
        console.error(error);
      }
    },

    async getCategories() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/categories");
        this.categories = response.data;
        console.log(this.categories);
      } catch (error) {
        this.error = error.message;
        console.error(error);
      }
    },

    cardRouter() {
      this.$router.push({ name: "Products" });
    },

    selectCategory(category) {
      if (this.selectedCategory === category) {
        this.selectedCategory = null;
      } else {
        this.selectedCategory = category;
      }
    },
  },
};
</script>

<style>
.card-img-top {
  height: 200px;
  object-fit: cover;
}

.cardCategory {
  transition: all 0.3s ease-in-out;
}

.cardCategory .card-title {
  font-size: 20px;
  font-weight: 600;
  color: #000000;
}

.cardCategory:hover {
  transform: scale(1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.cardFeature {
  transition: all 0.3s ease-in-out;
}

.cardFeature:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
</style>
