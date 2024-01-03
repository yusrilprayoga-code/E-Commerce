<template>
  <div class="Features container">
    <h2 class="mt-5 text-center mb-5">Features</h2>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col mt-3" v-for="feature in features" :key="feature.id">
        <div class="card h-100">
          <img :src="feature.image" class="card-img-top" alt="Feature Image" />
          <div class="card-body">
            <h5 class="card-title">{{ feature.title }}</h5>
            <!-- You can add more details here if needed -->
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
    };
  },

  mounted() {
    this.getFeatures();
  },

  methods: {
    async getFeatures() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        this.features = response.data;
        console.log(this.features);
      } catch (error) {
        console.error(error);
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
</style>
